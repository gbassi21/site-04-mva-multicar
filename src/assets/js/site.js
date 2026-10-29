// MVA Multicar: menu, movimento e galeria. JavaScript puro; o site funciona sem ele.
(() => {
  const movimento = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

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

  // Movimento (specs/design.md §8): só anima o que entra na tela depois do carregamento;
  // o que já está visível fica como está, para não atrasar a primeira tela.
  if (movimento && "IntersectionObserver" in window) {
    const alvos = [
      ...[...document.querySelectorAll("[data-chegada]")].map((el) => [el, "a-chegar", "chegou"]),
      ...[...document.querySelectorAll("[data-revelar]")].map((el) => [el, "a-revelar", "revelado"]),
    ].filter(([el]) => el.getBoundingClientRect().top > window.innerHeight);

    const final = new Map(alvos.map(([el, , classeFinal]) => [el, classeFinal]));
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas
          .filter((entrada) => entrada.isIntersecting)
          .forEach((entrada, i) => {
            entrada.target.style.setProperty("--atraso", `${i * 80}ms`);
            entrada.target.classList.add(final.get(entrada.target));
            observador.unobserve(entrada.target);
          });
      },
      { threshold: 0.35, rootMargin: "0px 0px -5% 0px" },
    );
    for (const [el, classeInicial] of alvos) {
      el.classList.add(classeInicial);
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
})();
