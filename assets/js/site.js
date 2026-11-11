// MVA Multicar: menu, filtros da vitrine, movimento e galeria. JavaScript puro; o site funciona sem ele.
(() => {
  const movimento = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

  // Cabeçalho de vidro depois de 8 px de rolagem.
  const cabecalhoFixo = document.querySelector("[data-cabecalho]");
  if (cabecalhoFixo) {
    const rolar = () => cabecalhoFixo.classList.toggle("rolado", window.scrollY > 8);
    window.addEventListener("scroll", rolar, { passive: true });
    rolar();
  }

  // Reinicia a animação "tick" quando um número muda (contagem da vitrine).
  const pulsar = (el) => {
    el.classList.remove("tick");
    void el.offsetWidth;
    el.classList.add("tick");
  };

  // Tema claro/escuro (specs/design.md §3.1): o botão sol/lua troca e guarda a escolha; sem escolha, segue o aparelho.
  const CHAVE_TEMA = "mva-tema";
  const raiz = document.documentElement;
  const botoesTema = document.querySelectorAll("[data-alternar-tema]");
  const escuroNoAparelho = window.matchMedia("(prefers-color-scheme: dark)");
  const temaGuardado = () => {
    try {
      return localStorage.getItem(CHAVE_TEMA);
    } catch {
      return null;
    }
  };
  const rotularTema = () => {
    const escuro = raiz.dataset.tema === "escuro";
    const rotulo = escuro ? "Mudar para o tema claro" : "Mudar para o tema escuro";
    for (const botao of botoesTema) botao.setAttribute("aria-label", rotulo);
    for (const texto of document.querySelectorAll("[data-texto-tema]")) texto.textContent = rotulo;
  };
  // A troca acontece dentro de uma transição de página: as cores mudam juntas, num esmaecimento curto.
  const aplicarTema = (tema) => {
    const trocar = () => {
      raiz.dataset.tema = tema;
      rotularTema();
    };
    // Com a aba escondida o navegador cancela a transição (o tema muda mesmo assim); ignora o aviso.
    if (movimento && document.startViewTransition && !document.hidden) document.startViewTransition(trocar).ready.catch(() => {});
    else trocar();
  };
  rotularTema();
  for (const botao of botoesTema) {
    botao.addEventListener("click", () => {
      const tema = raiz.dataset.tema === "escuro" ? "claro" : "escuro";
      try {
        localStorage.setItem(CHAVE_TEMA, tema);
      } catch {}
      aplicarTema(tema);
    });
  }
  escuroNoAparelho.addEventListener("change", (e) => {
    if (!temaGuardado()) aplicarTema(e.matches ? "escuro" : "claro");
  });
  window.addEventListener("storage", (e) => {
    if (e.key === CHAVE_TEMA && e.newValue) aplicarTema(e.newValue);
  });

  // Menu do celular
  const cabecalho = document.querySelector("[data-cabecalho]");
  const botaoMenu = cabecalho?.querySelector("[data-menu]");
  const fecharMenu = () => {
    botaoMenu.setAttribute("aria-expanded", "false");
    cabecalho.removeAttribute("data-aberto");
  };
  botaoMenu?.addEventListener("click", () => {
    const abrir = botaoMenu.getAttribute("aria-expanded") !== "true";
    botaoMenu.setAttribute("aria-expanded", String(abrir));
    cabecalho.toggleAttribute("data-aberto", abrir);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && cabecalho?.hasAttribute("data-aberto")) {
      fecharMenu();
      botaoMenu.focus();
    }
  });

  // Filtros da vitrine (specs/site.md §3.2): marca (chips), carroceria, ano, câmbio e preço, com o estado na URL.
  const filtros = document.querySelector("[data-filtros]");
  if (filtros) {
    const campos = ["q", "carroceria", "marca", "ano", "cambio", "preco_max", "ordem"];
    const vitrine = document.querySelector("[data-vitrine]");
    const fim = vitrine.querySelector(".vitrine__item--fim");
    const cards = [...vitrine.querySelectorAll("[data-carroceria]")];
    const normalizar = (texto = "") => texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const ordens = {
      "menor-preco": (a, b) => a.dataset.preco - b.dataset.preco,
      "maior-preco": (a, b) => b.dataset.preco - a.dataset.preco,
      "menor-km": (a, b) => a.dataset.km - b.dataset.km,
    };
    const resultado = filtros.querySelector("[data-resultado]");
    const vazio = document.querySelector("[data-vazio]");
    const chips = [...filtros.querySelectorAll(".chip")];
    const iconeFechar = document.querySelector(".icone-fechar svg");

    // Etiquetas dos filtros ativos: cada uma remove o seu filtro.
    const ativos = document.createElement("div");
    ativos.className = "filtros__ativos";
    ativos.setAttribute("role", "group");
    ativos.setAttribute("aria-label", "Filtros ativos");
    filtros.append(ativos);
    const rotulos = {
      q: (v) => `“${v}”`,
      marca: () => filtros.querySelector("[name=marca]:checked + span")?.firstChild.textContent.trim(),
      carroceria: () => filtros.elements.carroceria.selectedOptions[0].text,
      ano: (v) => `A partir de ${v}`,
      cambio: () => filtros.elements.cambio.selectedOptions[0].text,
      preco_max: () => `Até ${filtros.elements.preco_max.selectedOptions[0].text}`,
    };

    const passa = (d, f, termos, ignorar) =>
      (ignorar === "marca" || !f.marca || d.marca === f.marca) &&
      (!f.carroceria || d.carroceria === f.carroceria) &&
      (!f.ano || Number(d.ano) >= Number(f.ano)) &&
      (!f.cambio || d.cambio === f.cambio) &&
      (!f.preco_max || Number(d.preco) <= Number(f.preco_max)) &&
      termos.every((termo) => d.busca.includes(termo));

    const aplicar = (gravarUrl = true) => {
      const f = Object.fromEntries(new FormData(filtros));
      const termos = normalizar(f.q).split(/\s+/).filter(Boolean);
      let total = 0;
      for (const card of cards) {
        const ok = passa(card.dataset, f, termos);
        card.closest("li").hidden = !ok;
        if (ok) total++;
      }
      const ordem = ordens[f.ordem] || ((a, b) => a.closest("li").dataset.posicao - b.closest("li").dataset.posicao);
      for (const card of [...cards].sort(ordem)) vitrine.insertBefore(card.closest("li"), fim);
      const texto = total === 1 ? "1 carro" : `${total} carros`;
      if (resultado.textContent !== texto) {
        resultado.textContent = texto;
        pulsar(resultado);
      }
      vazio.hidden = total > 0;

      // Contagem de cada marca com os outros filtros aplicados; a que zeraria o resultado fica apagada.
      for (const chip of chips) {
        const valor = chip.querySelector("input").value;
        const qtd = cards.filter((c) => (!valor || c.dataset.marca === valor) && passa(c.dataset, f, termos, "marca")).length;
        const contador = chip.querySelector("small");
        if (contador.textContent !== String(qtd)) contador.textContent = qtd;
        chip.classList.toggle("chip--zerado", qtd === 0);
      }

      const atuais = Object.keys(rotulos).filter((campo) => f[campo]);
      const chave = atuais.map((campo) => `${campo}=${f[campo]}`).join("&");
      if (ativos.dataset.chave !== chave) {
        ativos.dataset.chave = chave;
        ativos.replaceChildren(
          ...atuais.map((campo) => {
            const botao = document.createElement("button");
            botao.type = "button";
            botao.className = "filtro-ativo";
            botao.dataset.campo = campo;
            const nome = rotulos[campo](f[campo]);
            botao.setAttribute("aria-label", `Remover filtro: ${nome}`);
            botao.append(nome);
            if (iconeFechar) botao.append(iconeFechar.cloneNode(true));
            return botao;
          }),
        );
      }
      if (gravarUrl) {
        const params = new URLSearchParams();
        for (const campo of campos) if (f[campo]) params.set(campo, f[campo]);
        const busca = params.toString();
        history.replaceState(null, "", `${location.pathname}${busca ? `?${busca}` : ""}${location.hash}`);
      }
    };

    const marcar = (campo, valor) => {
      const el = filtros.elements[campo];
      if (!el) return;
      if (el instanceof RadioNodeList) for (const opcao of el) opcao.checked = opcao.value === valor;
      else el.value = valor;
    };

    const inicial = new URLSearchParams(location.search);
    if (campos.some((campo) => inicial.has(campo))) {
      for (const campo of campos) if (inicial.has(campo)) marcar(campo, inicial.get(campo));
      aplicar(false);
    }

    ativos.addEventListener("click", (e) => {
      const botao = e.target.closest("[data-campo]");
      if (!botao) return;
      marcar(botao.dataset.campo, "");
      aplicar();
      (ativos.querySelector("button") || resultado).focus?.();
    });
    filtros.addEventListener("change", () => aplicar());
    filtros.elements.q?.addEventListener("input", () => aplicar());
    filtros.addEventListener("submit", (e) => {
      e.preventDefault();
      aplicar();
    });
    filtros.addEventListener("reset", () => requestAnimationFrame(() => aplicar()));
  }

  // Formulários que montam a mensagem e abrem o WhatsApp; nada é enviado ao site (specs/site.md §6).
  for (const form of document.querySelectorAll("[data-form-whatsapp]")) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const linhas = [form.dataset.abertura];
      for (const el of form.querySelectorAll("[data-rotulo]")) {
        const valor = el.matches("fieldset") ? el.querySelector("input:checked")?.value : el.value.trim();
        if (valor) linhas.push(`${el.dataset.rotulo}: ${valor}`);
      }
      window.open(`https://wa.me/${form.dataset.numero}?text=${encodeURIComponent(linhas.join("\n"))}`, "_blank", "noopener");
    });
  }

  // Movimento (specs/design.md §8): os cards de veículo abaixo da primeira tela chegam ao aparecer;
  // o que já está visível no carregamento fica como está.
  if (movimento && "IntersectionObserver" in window) {
    const alvos = [...document.querySelectorAll("[data-chegada]")].filter((el) => el.getBoundingClientRect().top > window.innerHeight);
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas
          .filter((entrada) => entrada.isIntersecting)
          .forEach((entrada, i) => {
            entrada.target.style.setProperty("--atraso", `${i * 90}ms`);
            entrada.target.classList.add("chegou");
            observador.unobserve(entrada.target);
          });
      },
      { threshold: 0.35, rootMargin: "0px 0px -5% 0px" },
    );
    for (const el of alvos) {
      el.classList.add("a-chegar");
      observador.observe(el);
    }
  }

  // Galeria do veículo: rolagem nativa com setas, miniaturas e teclado.
  for (const galeria of document.querySelectorAll("[data-galeria]")) {
    const trilho = galeria.querySelector(".galeria__trilho");
    const total = trilho.children.length;
    const contador = galeria.querySelector("[data-contador]");
    const anterior = galeria.querySelector("[data-anterior]");
    const proxima = galeria.querySelector("[data-proxima]");
    const miniaturas = [...galeria.querySelectorAll("[data-miniatura]")];
    const faixa = galeria.querySelector(".galeria__miniaturas");
    let atual = 0;

    const ir = (indice) => {
      const alvo = Math.max(0, Math.min(total - 1, indice));
      trilho.scrollTo({ left: alvo * trilho.clientWidth, behavior: movimento ? "smooth" : "auto" });
    };
    const marcar = (indice) => {
      if (indice === atual) return;
      atual = indice;
      contador.textContent = String(indice + 1);
      anterior.disabled = indice === 0;
      proxima.disabled = indice === total - 1;
      miniaturas.forEach((m, j) => m.setAttribute("aria-current", String(j === indice)));
      const mini = miniaturas[indice];
      if (mini && faixa) {
        const esquerda = mini.offsetLeft - (faixa.clientWidth - mini.offsetWidth) / 2;
        faixa.scrollTo({ left: esquerda, behavior: movimento ? "smooth" : "auto" });
      }
    };

    let quadro = 0;
    trilho.addEventListener(
      "scroll",
      () => {
        cancelAnimationFrame(quadro);
        quadro = requestAnimationFrame(() => marcar(Math.round(trilho.scrollLeft / trilho.clientWidth)));
      },
      { passive: true },
    );
    // Lupa de 2× que segue o mouse (só computador; specs/design.md §8.1).
    if (movimento && window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 1024px)").matches) {
      trilho.addEventListener("pointermove", (e) => {
        const slide = e.target.closest(".galeria__slide");
        if (!slide || e.pointerType !== "mouse") return;
        const caixa = slide.getBoundingClientRect();
        slide.style.setProperty("--lx", `${((e.clientX - caixa.left) / caixa.width) * 100}%`);
        slide.style.setProperty("--ly", `${((e.clientY - caixa.top) / caixa.height) * 100}%`);
        slide.classList.add("lupa");
      });
      trilho.addEventListener("pointerleave", () => trilho.querySelector(".lupa")?.classList.remove("lupa"));
      trilho.addEventListener("scroll", () => trilho.querySelector(".lupa")?.classList.remove("lupa"), { passive: true });
    }

    anterior.disabled = true;
    anterior.addEventListener("click", () => ir(atual - 1));
    proxima.addEventListener("click", () => ir(atual + 1));
    miniaturas.forEach((m, j) =>
      m.addEventListener("click", (e) => {
        e.preventDefault();
        ir(j);
      }),
    );
    trilho.addEventListener("keydown", (e) => {
      const teclas = { ArrowRight: atual + 1, ArrowLeft: atual - 1, Home: 0, End: total - 1 };
      if (e.key in teclas) {
        e.preventDefault();
        ir(teclas[e.key]);
      }
    });
  }

  // Favoritos (specs/design.md §6): a lista fica só no localStorage deste navegador; nada é enviado ao site.
  const CHAVE_FAVORITOS = "mva-favoritos";
  const painel = document.querySelector("[data-favoritos]");
  const botaoFavoritos = document.querySelector("[data-abrir-favoritos]");
  const contadorFavoritos = document.querySelector("[data-contador-favoritos]");
  const lerFavoritos = () => {
    try {
      const lista = JSON.parse(localStorage.getItem(CHAVE_FAVORITOS));
      return Array.isArray(lista) ? lista : [];
    } catch {
      return [];
    }
  };
  let favoritos = lerFavoritos();
  const gravarFavoritos = () => {
    try {
      localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(favoritos));
    } catch {}
  };

  // Pulinho de confirmação (coração e contador), só ao salvar.
  const pular = (el) => {
    if (!movimento || !el) return;
    el.classList.remove("pulou");
    void el.offsetWidth;
    el.classList.add("pulou");
  };

  // Lê do card (ou da página do veículo) o link e a foto que aparecem na lista.
  const dadosDoFavorito = (botao) => {
    const card = botao.closest(".card-veiculo");
    const foto = card ? card.querySelector(".card-veiculo__quadro > picture img") : document.querySelector(".galeria__slide img");
    return {
      id: botao.dataset.favorito,
      nome: botao.dataset.nome,
      versao: botao.dataset.versao,
      preco: botao.dataset.preco,
      url: card?.querySelector(".card-veiculo__nome a")?.href || location.href.split(/[?#]/)[0],
      foto: foto?.currentSrc || foto?.src || "",
    };
  };

  const atualizarFavoritos = (anterior) => {
    const ids = new Set(favoritos.map((f) => f.id));
    for (const botao of document.querySelectorAll("[data-favorito]")) {
      const salvo = ids.has(botao.dataset.favorito);
      botao.setAttribute("aria-pressed", String(salvo));
      botao.setAttribute("aria-label", salvo ? `Remover ${botao.dataset.nome} dos favoritos` : `Salvar ${botao.dataset.nome} nos favoritos`);
    }
    if (!contadorFavoritos) return;
    contadorFavoritos.hidden = favoritos.length === 0;
    contadorFavoritos.textContent = favoritos.length;
    botaoFavoritos.setAttribute("aria-label", favoritos.length ? `Carros salvos: ${favoritos.length}` : "Carros salvos");
    if (anterior !== undefined && favoritos.length > anterior) pular(botaoFavoritos);
  };

  // Mantém nome, versão, preço e link em dia quando o carro salvo aparece na página.
  for (const botao of document.querySelectorAll("[data-favorito]")) {
    const salvo = favoritos.find((f) => f.id === botao.dataset.favorito);
    if (salvo) {
      const atual = dadosDoFavorito(botao);
      Object.assign(salvo, atual, { foto: salvo.foto || atual.foto });
    }
  }
  gravarFavoritos();
  atualizarFavoritos();

  document.addEventListener("click", (e) => {
    const botao = e.target.closest("[data-favorito]");
    if (!botao) return;
    e.preventDefault();
    e.stopPropagation();
    const antes = favoritos.length;
    const id = botao.dataset.favorito;
    const salvo = favoritos.some((f) => f.id === id);
    favoritos = salvo ? favoritos.filter((f) => f.id !== id) : [dadosDoFavorito(botao), ...favoritos];
    gravarFavoritos();
    atualizarFavoritos(antes);
    if (!salvo) for (const igual of document.querySelectorAll(`[data-favorito="${CSS.escape(id)}"]`)) pular(igual);
  });
  window.addEventListener("storage", (e) => {
    if (e.key !== CHAVE_FAVORITOS) return;
    favoritos = lerFavoritos();
    atualizarFavoritos();
  });

  if (painel && botaoFavoritos) {
    const lista = painel.querySelector("[data-lista-favoritos]");
    const linkWhatsApp = painel.querySelector("[data-favoritos-wa]");

    const ajustarPainel = () => {
      painel.querySelector("[data-favoritos-vazio]").hidden = favoritos.length > 0;
      painel.querySelector("[data-favoritos-rodape]").hidden = favoritos.length === 0;
      const linhas = favoritos.map((f) => `- ${f.nome} ${f.versao} (${f.preco})`);
      const texto = ["Olá! Vi estes carros no site da MVA Multicar e quero saber mais:", ...linhas].join("\n");
      linkWhatsApp.href = `https://wa.me/${painel.dataset.numero}?text=${encodeURIComponent(texto)}`;
    };

    // Cada linha é montada com textContent: nada salvo no navegador vira HTML.
    const desenharLista = () => {
      lista.replaceChildren(
        ...favoritos.map((f, i) => {
          const item = document.createElement("li");
          item.className = "favorito";
          item.dataset.id = f.id;
          item.style.setProperty("--i", Math.min(i, 8));
          item.innerHTML = '<a class="favorito__foto" tabindex="-1" aria-hidden="true"><img alt="" loading="lazy" decoding="async"></a><div class="favorito__info"><p class="favorito__nome"><a></a></p><p class="favorito__versao"></p><p class="favorito__preco"></p><button class="favorito__remover" type="button">Remover</button></div>';
          const [linkFoto, linkNome] = item.querySelectorAll("a");
          linkFoto.href = linkNome.href = f.url;
          if (f.foto) item.querySelector("img").src = f.foto;
          linkNome.textContent = f.nome;
          item.querySelector(".favorito__versao").textContent = f.versao;
          item.querySelector(".favorito__preco").textContent = f.preco;
          item.querySelector("button").setAttribute("aria-label", `Remover ${f.nome} dos favoritos`);
          return item;
        }),
      );
    };

    const fecharPainel = () => {
      if (!painel.open) return;
      if (!movimento) return painel.close();
      painel.classList.add("fechando");
      setTimeout(concluirFechamento, 400); // se a animação não rodar (aba em segundo plano), fecha mesmo assim
    };
    const concluirFechamento = () => {
      if (!painel.classList.contains("fechando")) return;
      painel.classList.remove("fechando");
      painel.close();
    };
    painel.addEventListener("animationend", (e) => {
      if (e.target === painel) concluirFechamento();
    });

    botaoFavoritos.addEventListener("click", () => {
      desenharLista();
      ajustarPainel();
      painel.showModal();
    });
    painel.querySelector("[data-fechar-favoritos]").addEventListener("click", fecharPainel);
    // Esc fecha com a mesma animação.
    painel.addEventListener("cancel", (e) => {
      e.preventDefault();
      fecharPainel();
    });
    // Clique no fundo escurecido (fora da caixa do painel) fecha.
    painel.addEventListener("click", (e) => {
      const caixa = painel.getBoundingClientRect();
      if (e.clientX < caixa.left || e.clientX > caixa.right || e.clientY < caixa.top || e.clientY > caixa.bottom) fecharPainel();
    });
    // Remover: a linha desliza para fora e só então sai da lista.
    lista.addEventListener("click", (e) => {
      const remover = e.target.closest(".favorito__remover");
      if (!remover) return;
      const item = remover.closest(".favorito");
      const tirar = () => {
        const vizinho = (item.nextElementSibling || item.previousElementSibling)?.querySelector(".favorito__remover");
        item.remove();
        favoritos = favoritos.filter((f) => f.id !== item.dataset.id);
        gravarFavoritos();
        atualizarFavoritos();
        ajustarPainel();
        (vizinho || painel.querySelector("[data-favoritos-vazio] a")).focus();
      };
      if (!movimento) return tirar();
      item.classList.add("saindo");
      setTimeout(tirar, 280);
    });
  }

  // Comentários do Google (specs/design.md §6): com a chave da API em loja.googleMaps.chave, a seção de
  // avaliações busca no Google Maps, ao vivo, a nota, a quantidade e os comentários de 5 estrelas com texto.
  // O serviço do Google só é carregado quando a seção chega perto da tela. Sem chave ou sem resposta, fica a nota.
  const secaoComentarios = document.querySelector("[data-comentarios-google][data-chave]");
  if (secaoComentarios) {
    const chave = secaoComentarios.dataset.chave;
    const porUnidade = Number(secaoComentarios.dataset.porUnidade) || 3;
    const formatoNota = new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

    const carregarGoogle = () =>
      new Promise((pronto, falha) => {
        window.__mvaGooglePronto = pronto;
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(chave)}&v=weekly&loading=async&language=pt-BR&region=BR&callback=__mvaGooglePronto`;
        script.async = true;
        script.onerror = falha;
        document.head.append(script);
      });

    // Cada comentário é montado com textContent: nada que vem de fora vira HTML.
    const cartao = (comentario, modeloEstrelas) => {
      const autor = comentario.authorAttribution || {};
      const item = document.createElement("li");
      item.className = "comentario";
      item.innerHTML = '<div class="comentario__topo"><img class="comentario__foto" alt="" width="40" height="40" loading="lazy" referrerpolicy="no-referrer"><div class="comentario__quem"><a class="comentario__autor" target="_blank" rel="noopener"></a><span class="comentario__quando"></span></div></div><p class="comentario__texto"></p>';
      const foto = item.querySelector("img");
      if (autor.photoURI) foto.src = autor.photoURI;
      else foto.remove();
      const link = item.querySelector("a");
      link.textContent = autor.displayName || "Cliente no Google";
      if (autor.uri) link.href = autor.uri;
      else link.removeAttribute("target");
      item.querySelector(".comentario__quando").textContent = comentario.relativePublishTimeDescription || "";
      const estrelas = modeloEstrelas.cloneNode(true);
      estrelas.classList.add("estrelas--pequenas");
      estrelas.style.setProperty("--nota", 5);
      estrelas.setAttribute("aria-label", "5 de 5 estrelas");
      estrelas.removeAttribute("data-estrelas");
      item.querySelector(".comentario__topo").after(estrelas);
      item.querySelector(".comentario__texto").textContent = comentario.text.trim();
      return item;
    };

    const mostrarComentarios = async () => {
      try {
        await carregarGoogle();
        const { Place } = await google.maps.importLibrary("places");
        let algum = false;
        for (const unidade of secaoComentarios.querySelectorAll("[data-lugar]")) {
          const { places } = await Place.searchByText({ textQuery: unidade.dataset.lugar, fields: ["id"], maxResultCount: 1, language: "pt-BR", region: "br" });
          const lugar = places?.[0];
          if (!lugar) continue;
          await lugar.fetchFields({ fields: ["rating", "userRatingCount", "reviews", "googleMapsURI"] });

          // Nota e quantidade atuais, no lugar das consultadas no build.
          const estrelas = unidade.querySelector("[data-estrelas]");
          if (lugar.rating) {
            const nota = formatoNota.format(lugar.rating);
            unidade.querySelector("[data-nota]").textContent = nota;
            estrelas.style.setProperty("--nota", lugar.rating);
            estrelas.setAttribute("aria-label", `Nota ${nota} de 5`);
          }
          if (lugar.userRatingCount) unidade.querySelector("[data-qtd]").textContent = lugar.userRatingCount;
          if (lugar.googleMapsURI) unidade.querySelector("[data-link-google]").href = lugar.googleMapsURI;

          const bons = (lugar.reviews || []).filter((c) => c.rating === 5 && c.text?.trim()).slice(0, porUnidade);
          if (!bons.length) continue;
          const lista = unidade.querySelector("[data-lista-comentarios]");
          lista.replaceChildren(...bons.map((c) => cartao(c, estrelas)));
          lista.hidden = false;
          algum = true;
        }
        // Com comentários ao vivo, a nota de fonte passa a falar deles; sem, ficam os depoimentos autorizados.
        if (algum) {
          const fonte = secaoComentarios.querySelector("[data-fonte-comentarios]");
          fonte.textContent = "Comentários de 5 estrelas do Google Maps, carregados ao vivo. A nota acima considera todas as avaliações.";
          fonte.hidden = false;
        }
      } catch {
        // Chave inválida, cota esgotada ou sem rede: a seção continua só com a nota.
      }
    };

    if ("IntersectionObserver" in window) {
      const vigia = new IntersectionObserver(
        (entradas) => {
          if (!entradas.some((e) => e.isIntersecting)) return;
          vigia.disconnect();
          mostrarComentarios();
        },
        { rootMargin: "400px 0px" },
      );
      vigia.observe(secaoComentarios);
    } else mostrarComentarios();
  }
})();
