# MVA Multicar: memória de decisões

Registro curto: data, decisão e motivo. Decisão substituída fica riscada com a data da troca. "Assumido" = escolha feita sem confirmação, a revisar. Pendências para os donos no fim.

## Decisões

### 29/10/2026: preparação (prompt do Paulo)

- **Escopo e natureza:** rebranding de demonstração, não oficial, apresentado só em particular aos donos. "Projeto de demonstração" em todas as páginas, `noindex`, nenhuma citação de agência, criador ou marca terceira. Motivo: prospecção sem parecer site oficial.
- **Stack:** Eleventy 3 + @11ty/eleventy-img, HTML, CSS e JavaScript puro mínimo. Um arquivo de dados por veículo vira uma página. Painel Decap ou Sveltia só na entrega. Motivo: site estático rápido e fácil de manter.
- **Páginas:** início, estoque, veículo, vender ou trocar, financiamento, oficina, sobre, contato e localização, privacidade, 404 (`specs/site.md` §3).
- **Oficina com página própria:** o pedido do cliente dizia "oficina só citada"; o prompt de 29/10 inclui a página "oficina (MVA Centro Automotivo)" e o card "Cuide do seu carro" levando a ela. Vale o prompt, por ser a decisão mais recente do Paulo; a página é curta e o foco segue na venda.
- **Identidade:** moderna, limpa, fundo claro, cards brancos, cantos arredondados, quase sem sombra; vermelho da marca como única cor de ação. Motivo: manter o reconhecimento (MVA, vermelho, grafite, prata) sem o cromado/3D.
- **CTAs:** WhatsApp da loja (27) 99780-7040 em venda, compra e troca; WhatsApp da oficina (27) 99916-1157 só nos serviços da oficina.
- **Imagens:** veículos só de `imagens-geradas/`, nunca gerados nem alterados; ilustrativas geradas pelo Paulo no ChatGPT, com pessoas fictícias; etiqueta "Imagem ilustrativa" em todas; bloco "imagem a definir" enquanto faltar.
- **Movimento:** moderado, com a assinatura do carro entrando; respeitar `prefers-reduced-motion`; nunca esconder preço, ano, km, fotos ou WhatsApp.
- **Dados:** nada inventado; avaliações só a nota real do Google (loja 4,2 com 5; oficina 4,0 com 127), com link.

### 29/10/2026: respostas da rodada de perguntas

- **Referências ausentes:** `ref-estrutura-kavak.md` e `solucoes-secoes-mva.md` não existiam. Paulo escolheu seguir pelo print anexado; a descrição da estrutura e as soluções por seção foram escritas em `specs/design.md` §1 e `specs/site.md` §3, como proposta.
- **Duster na amostra:** a Renault Duster 2016 já chegou padronizada e entra na amostra com Ranger e Saveiro (3 cards).
- **Regras do estoque (correção do Paulo):**
  1. Vitrine única com os carros misturados, sem abas, grupos ou rótulos por faixa de valor. Os 10 veículos foram escolhidos só para ter um leque variado de preços e tipos.
  2. Ordem padrão: a mais recente primeiro, ou a ordem definida pela loja.
  3. Filtros: faixa de preço (calculada pelo campo `preco`), tipo de carroceria (Hatch, Sedã, SUV, Picape) e marca.
  4. "Destaque" é um selo opcional (`destaque: true/false`), escolhido pela loja, sem relação com o preço. Na amostra, nenhum carro marcado.
  5. Nenhum campo de grupo nos arquivos de dados.
- **Filtros do estoque:** a regra acima (preço, carroceria, marca) substitui a lista do prompt inicial, que também tinha ano, km, câmbio e combustível. ~~Filtros por categoria, marca, ano, preço, km, câmbio e combustível~~ (29/10/2026). Confirmar com o Paulo se algum desses volta como filtro secundário.
- **Ficha técnica:** preencher só o inequívoco: o que a versão diz ("aut", "4x4", "CD", motor) e o que tem uma única possibilidade técnica, marcado em `assumidos`; o resto fica "a confirmar".

### 29/10/2026: design (proposta da amostra)

- **Fonte:** Inter (variável, OFL 1.1), local. Motivo: neogrotesca neutra no espírito da Helvetica, legível para qualquer público, algarismos tabulares para preço e km.
- **Paleta:** vermelho #B2251D mantido como ação (6,61:1 sobre branco, não precisou de ajuste); grafite #1D1E22 para texto; fundo #F5F5F7; prata só sobre escuro. Tabela em `specs/design.md` §3.
- **Logo:** MVA em polígonos retos inclinados, M vermelho, VA grafite/prata, três traços de velocidade (herança do logo antigo), sem anel nem cromado; "MULTICAR" ao lado em versais espaçadas. Motivo: modernizar mantendo o reconhecimento.
- **Proporção:** conteúdo de 1040 px com margens largas, como a referência.
- **Assinatura de movimento:** a imagem do carro desliza para o lugar enquanto três traços vermelhos (os do logo) cruzam o quadro. A imagem nunca fica invisível.
- **Botão de WhatsApp:** vermelho como os demais, com balão de conversa genérico e a palavra "WhatsApp" (sem o logotipo do aplicativo).
- **Hero:** entrega das chaves com o laço vermelho no capô (I-01), sem rostos, título "Seu próximo carro, perto de casa".

### 29/10/2026: ajustes ao construir a amostra

- **WhatsApp nos cards de veículo:** botão em contorno vermelho, na largura do card, abaixo do preço. Motivo: preço e botão lado a lado não cabiam em 248 px; contorno evita uma grade de botões cheios.
- **Animação só abaixo da primeira tela:** o que já aparece no carregamento não anima. Motivo: não atrasar a primeira tela nem fazer a imagem "pular".
- **Faixa de demonstração no celular:** "Projeto de demonstração · não oficial" (uma linha); texto completo a partir de 560 px e no rodapé.
- **Busca do hero:** texto de exemplo "Marca ou modelo" (o longo era cortado em 390 px); o rótulo acessível continua "Buscar por marca ou modelo".

### 29/10/2026: Amostra v1 (revisão do Paulo: v0 "fraca, genérica, com cara de site sem conteúdo")

- **Referências:** `ref-estrutura-kavak.md`, `solucoes-secoes-mva.md`, `ref-kavak-pagina-inteira.png` e o `pedido-do-cliente.md` corrigido estavam em `Documents/Agencia-Sites-Imobiliarias/criacao-de-sites/site-04-mva-multicar/referencias/`; foram copiados para `referencias/` deste projeto (o pedido antigo foi substituído pelo corrigido).
- **Cor:** ~~vermelho de ação #B2251D, fundo quase todo claro~~ → vermelho de ação #D7191F (branco sobre ele 5,19:1), #B2251D no hover; preto #0C0C0E em grandes blocos (hero, oficina, rodapé); vermelho em grande área (faixa CTA, selos, sublinhado dos títulos, números do "Como funciona"); ritmo preto / branco / cinza / vermelho. Motivo: preto e vermelho são a assinatura da marca.
- **Largura e escala:** ~~1040 px~~ → até 1360 px com margem de 32 px (medida da referência); H1 64 px, H2 36 px, preço 24 px.
- **Ícones:** ~~desenho próprio~~ → Lucide (ISC) em SVG local; glifos oficiais de WhatsApp e Instagram do Simple Icons (CC0); silhuetas de carroceria no mesmo traço. ~~Botão de WhatsApp com balão genérico~~ → glifo oficial em todos os botões de WhatsApp.
- **WhatsApp flutuante** em todas as páginas (número da loja; na página da oficina, o da oficina).
- **Hero:** ~~imagem do dia a dia centralizada com véu~~ → fundo preto, texto à esquerda, imagem grande à direita. Até `ia-hero-entrega.png` existir, usa a capa de estúdio da Ranger com etiqueta de preço e link para o carro. Exceção pedida pelo Paulo à regra "imagens de veículo só na vitrine e na página do veículo", válida só para o hero e só até a imagem do hero existir.
- **Placeholders:** ~~caixa cinza "imagem a definir" com nome do arquivo~~ → bloco de marca (vermelho, grafite ou preto, ícone grande e traços do logo); o nome do arquivo fica só em comentário no HTML.
- **Menu:** 4 itens (Estoque, Vender ou trocar, Oficina, Contato), como na referência; Financiamento segue no card de serviço e no rodapé.
- **Home completa na amostra**, na ordem pedida: cabeçalho, hero, 3 cards de serviço, confiança (oficina própria ao lado desde 2017, troca e financiamento, atendimento pelo WhatsApp), vitrine com filtros, explore por tipo, faixa preta da oficina com os serviços reais e WhatsApp da oficina, como funciona em 3 passos, avaliações do Google, faixa CTA vermelha e rodapé completo. "Clássicos e raridades", "Compre seguro" e "Para lojistas" (sugestões de `solucoes-secoes-mva.md`) ficam para o site completo.
- **Movimento:** ~~título de seção surgindo ao rolar~~ (retirado: efeito espalhado parece genérico) → um momento de abertura no hero (carro chega da direita, traços correm atrás) + a chegada dos carros na vitrine.
- **Respostas às pendências da v0:**
  - Filtros: ~~preço, carroceria e marca~~ → preço, carroceria, marca, ano e câmbio. Km e combustível ficam fora.
  - Catálogo: os 10 carros da tabela do `pedido-do-cliente.md` (os 22 são o total do estoque na Mobiauto, só como informação).
  - Ordem padrão: ano mais novo primeiro, aprovado.
  - As 7 pastas fora do padrão serão padronizadas pelo Paulo; aviso do Fastback anotado.
- **Dados do pedido corrigido aplicados:** Ranger "3.2 Limited 4x4 aut" com diesel declarado; Hilux "SRV 2.8 4x4 aut" com diesel declarado; "A3 Sedan 1.4 TFSI Prestige" (sedã declarado); Polo "Highline 1.0 TSI aut"; financiamento "via banco"; oficina seg a sex, 8h às 18h, e serviços (alinhamento 3D, balanceamento, pneus, freios, injeção eletrônica, óleo e fluido de câmbio automático, suspensão, motor).
- **Página 404** criada (estava na lista de páginas), para os links de páginas ainda não construídas não caírem no erro do servidor.

### 03/11/2026: páginas restantes (depois da aprovação da v1)

- Construídas estoque, vender ou trocar, financiamento, oficina, sobre, contato, privacidade e "Outros carros" na página do veículo, no mesmo sistema visual da v1 (topo preto com trilha, passos numerados, faixas alternadas, blocos de marca).
- **Formulários** montam a mensagem no navegador e abrem o WhatsApp; não pedem nome, telefone nem documento. Motivo: LGPD e "nada guardado no site".
- **Financiamento:** sem simulador, taxas ou parcelas; aviso explícito de que as condições dependem do banco; financeiras parceiras "a confirmar".
- **Oficina:** botão flutuante e todos os CTAs com o WhatsApp da oficina; temas das avaliações (preço, orçamento, confiança, honestidade, atendimento) vindos de `solucoes-secoes-mva.md`, com a data da consulta.
- **Contato:** bloco "Lojista? Carros no repasse" (fato dos posts da loja), com o WhatsApp da loja.
- **"Explore por tipo"** passou a levar a `/estoque/?carroceria=…` (antes filtrava a vitrine da home).
- **Privacidade:** texto de demonstração marcado para revisão jurídica; CNPJ da loja "a confirmar".
- "Clássicos e raridades" e "Compre seguro": ainda sem decisão do Paulo, não construídas.

### 03/11/2026: GitHub e publicação (pedido do Paulo)

- Repositório https://github.com/paulobreder/site-04-mva-multicar, criado privado e tornado público a pedido do Paulo; colaboradores ele mesmo convida.
- Site no ar pelo GitHub Pages, como o exemplo que o Paulo mandou: https://paulobreder.github.io/site-04-mva-multicar/. Continua com a barra de demonstração e `noindex` na meta; `robots.txt` e `_headers` não valem numa subpasta do Pages.
- Publicação manual com `npm run publicar` (branch `gh-pages`). A publicação automática por GitHub Actions ficou de fora porque o login do `gh` não tem a permissão `workflow`.
- Caminhos: `HtmlBasePlugin` com `--pathprefix`, fontes com caminho relativo no CSS, imagens geradas na pasta de saída do build.

### 03/11/2026: acabamento de interação a partir do "prompt mestre"

- Pedido: usar o prompt mestre de e-commerce (Drive, `PROMPT-MESTRE.md`) para melhorar o site. Entrou só o que cabe numa loja de carros e não contradiz decisões registradas; detalhes em `specs/design.md` §8.1.
- **Ficou de fora por contradizer o projeto:** revelação ao rolar em todas as seções (o §8 diz "nada de surgir em cada seção"); sacola, checkout, clube de fidelidade, recompra, avaliações de usuário, faixa de vantagens com frete/parcelas e mascotes (seriam dados ou serviços inventados); fonte e cores do modelo (identidade v1 mantida).
- **Favoritos:** acrescentados no mesmo dia, a pedido (coração no card e na galeria, contador no cabeçalho, painel com a lista e WhatsApp com os carros salvos); `specs/design.md` §6. Não guardam nada fora do navegador e o preço exibido é o do momento em que o carro foi salvo (atualizado quando o carro aparece de novo na página). Ícone `heart` do Lucide copiado para `lib/icones/linha/`.
- **Fica para decisão do Paulo:** mega menu e busca ao digitar no cabeçalho.

### 03/11/2026: revisão pelo Apple HIG

- Pedido: usar o repositório `ebuntario/apple-hig` como referência para revisar e reformular o site. Escolhas feitas no pedido (opções recomendadas): **manter a Inter**, **modo escuro automático**, **botão do WhatsApp secundário nos cards**, **manter o menu ☰**.
- **Substitui:** botão "Chamar no WhatsApp" vermelho cheio em todo card (`specs/design.md` §6, v1); site só com aparência clara.
- Detalhes em `specs/design.md` §3.1 e §8.0. Logo: os caminhos do SVG ganharam classes (`logo__m`, `logo__va`, `logo__tracos`) para o CSS trocar as cores no escuro.

### 03/11/2026: botão de tema sol/lua (pedido)

- Botão no cabeçalho: sol no tema claro, lua no escuro; troca e guarda a escolha no navegador. **Substitui** "sem botão de troca" da revisão pelo HIG, que desaconselha aparência própria do site; o padrão continua sendo seguir o aparelho. Detalhes em `specs/design.md` §3.1. Os tokens do escuro valem para `html[data-tema="escuro"]` e, sem JavaScript, para `prefers-color-scheme: dark` (bloco repetido no CSS).

### 03/11/2026: comentários do Google Maps (pedido)

- Pedido: trocar a seção de avaliações por comentários reais do Google Maps, só os de 5 estrelas falando bem. **Substitui** "sem depoimentos; avaliações: só a nota" (`AGENTS.md`, `specs/site.md` §8), com autorização no pedido.
- Como ficou: comentários **carregados ao vivo pela API oficial do Google**, não copiados para o site (o texto é de quem escreveu, e copiar fere os termos do Google). Filtro: 5 estrelas e com texto. A **nota real continua visível**, para não sugerir que todas as avaliações são 5 estrelas.
- Consulta em 03/11/2026: loja 4,2 (5 avaliações) e oficina 4,0 (127), as duas com comentários de 5 estrelas com texto. O Google entrega no máximo 5 comentários por lugar, escolhidos por ele; a loja pode mostrar só 1 ou 2.
- **Pendente:** criar a chave da Maps JavaScript API + Places API (New) no Google Cloud, restrita aos endereços do site, e colocá-la em `src/_data/loja.json` → `googleMaps.chave`. Conferir nas regras do Google Maps Platform se o filtro por nota é permitido e manter o crédito ao Google e o link para cada autor. A página de privacidade já cita o serviço do Google.

### 03/11/2026: depoimentos autorizados (pedido)

- Dois comentários de 5 estrelas da **loja** (Leidiane Vargas e Reinaldo Ameno), enviados em print, com a informação de que os autores aprovaram a publicação. Texto exato, sem correção, em `referencias/pedido-do-cliente.md` e `loja.depoimentos`. A loja guarda os comprovantes; quem pedir sai do site.
- O do Reinaldo elogia o site antigo e a intenção de visitar a loja (não uma compra); entrou porque foi pedido. Avaliar com o Paulo se fica.
- Oficina: dois comentários no site (Rodrigo G.Ramos e Luciano Walder - Serra - ES). O da Carla souza saiu em 04/11/2026, a pedido, para as duas colunas ficarem do mesmo tamanho (curto + longo dos dois lados; iguais em 1440 px); continua registrado em `referencias/pedido-do-cliente.md`. Todos foram enviados em print em 03/11, com aprovação informada; texto exato, com as quebras de linha do original (`white-space: pre-line`).

### 04/11/2026: cabeçalho mais limpo no celular e tablet (pedido)

- Pedido: o cabeçalho estava com "muita poluição visual" (logo, lua, coração, WhatsApp com número e ☰ lado a lado em ~520 px).
- Abaixo de 1024 px: o botão do WhatsApp volta a ser só o glifo (o número aparecia a partir de 480 px, contra o §9 do design) e o botão de tema vai para dentro do menu ☰. Fica: logo, coração (tem contador), WhatsApp e ☰. A partir de 1024 px, nada muda.

### 05/11/2026: revisão de usabilidade (Steve Krug) e correção do cabeçalho

- Revisão pela skill web-usability-designer ("Não me faça pensar"). Correção aplicada: entre 1024 e 1199 px o cabeçalho passava da tela (o botão de tema somado ao número do WhatsApp); agora o número só aparece a partir de 1200 px. Aplicado em seguida, a pedido:
  - **Financiamento no menu principal** (5 links). Para caber numa linha, os ícones dos links saem entre 1024 e 1365 px. Substitui "4 links com ícone" (`specs/design.md` §1 e §9).
  - **Texto vazio cortado:** subtítulos dos "Como funciona" (início, financiamento, vender ou trocar) e "Preencha e o WhatsApp abre…" (o botão "Enviar pelo WhatsApp" já diz isso); em vender ou trocar ficou só "As fotos você manda direto na conversa do WhatsApp."
  - **Repetições da home:** card "Quanto vale o seu carro?" encurtado (o texto era igual ao da faixa vermelha final); faixa de confiança sem os textos que repetiam a oficina e o financiamento ("Oficina própria ao lado, desde 2017", "Seu carro entra na troca", "Atendimento pelo WhatsApp" + número).
  - **Um botão vermelho por bloco:** "Falar sobre repasse" (Contato) passou a secundário. "Escolher no estoque" (Vender ou trocar) continua vermelho: é a única ação da faixa preta da troca.
- Ficam para o Paulo: "Cuide do seu carro" e "O laço vermelho" como títulos; filtros completos na home; o depoimento do Reinaldo.

### 05/11/2026: 9 carros de exemplo (pedido)

- Pedido: adicionar 9 modelos fictícios com as fotos do ZIP `MVA_Imagens_Carros.zip` e "inventar as outras informações". A regra do projeto ("nada inventado") permite isso só como **EXEMPLO marcado**, então: campo `exemplo: true`, selo "Exemplo" no card e na galeria, aviso na página do carro e aviso no início da mensagem de WhatsApp (a loja real não tem esses carros).
- Da tabela do pedido: modelo, ano, carroceria e cor. **Inventados** (valores plausíveis de mercado, sem pesquisa): versão/motor, km, preço e câmbio; combustível Flex em todos; Strada com cabine dupla.
- Fotos copiadas sem alteração para `imagens-geradas/<pasta>/` (117 PNGs, ~260 MB; idênticas às do ZIP). Aumentam bastante o repositório no próximo commit.
- Ficam fora do site, como antes, os 7 carros reais sem fotos padronizadas.
- **Mesmo dia, a pedido:** saiu o selo "Exemplo" do card e da galeria. Ficaram o aviso na página do carro e o aviso no início da mensagem de WhatsApp, para os dados inventados continuarem marcados (regra "nada inventado, só EXEMPLO marcado") e a loja real não receber pedido de carro que não existe. Tirar também esses avisos faria preços e km inventados parecerem anúncios reais: só com decisão do Paulo.

### 11/11/2026: vitrine por marca e publicação automática (pedido)

- Pedido: trocar o segmento por tipo (hatch, sedã, SUV, picape) por **marca**. Os chips da vitrine viraram círculos com o logo e o nome da marca (estilo pedido com print de referência); a carroceria virou uma lista ("Carroceria"), no lugar do select de marca. Os cinco filtros da regra continuam (preço, carroceria, marca, ano, câmbio). Na home, "Explore por tipo" virou "Explore por marca".
- **Só marcas com estoque:** a lista sai dos próprios carros (`opcoesFiltros`), então marca nova entra e marca sem carro some sozinha. Ficam guardados em `src/_data/logosMarcas.json` os logos de 22 marcas do Brasil (Simple Icons, CC0; licença já em `licencas/`; conferidos na versão 16.37.0 em 11/11/2026: os desenhos não mudaram, e Mercedes-Benz, Land Rover e Jaguar saíram porque a biblioteca deixou de trazer essas três) Exceção: a Fiat usa o letreiro FIAT atual (letras altas e estreitas), vetorizado a partir da imagem enviada pelo pedido em 11/11/2026, porque a biblioteca ainda traz o desenho antigo. Todos os logos aparecem numa cor só, definida em `--cor-logo-marca` no CSS (teste: preto); o campo `cor` de cada marca no JSON guarda a cor original, sem uso por enquanto; marca sem logo mostra o nome escrito no círculo. As marcas pertencem às montadoras; o uso é só para indicar o que a loja vende.
- **Publicação automática:** `.github/workflows/publicar.yml` monta o site no GitHub Actions a cada envio ao `main` do repositório gbassi21 e publica no branch `gh-pages`, mantendo o histórico. Substitui a cópia de teste ajustada à mão (`img-teste/`). Não muda o `npm run publicar` para o repositório do Paulo.

## Assumidos (a revisar)

- ~~Catálogo = 10 veículos com pasta~~ e ~~ordem por ano~~: confirmados pelo Paulo na v1 (ver acima).
- **Deduções técnicas inequívocas** (campo `assumidos` em cada arquivo): Saveiro 1.6 2014, Duster 1.6 2016, HB20 1.0, Prisma 1.4, Polo TSI, Fastback Impetus e Corolla Cross XRE 2.0 flex; Fastback Impetus e Corolla Cross XRE automáticos (versões vendidas só com CVT); Fastback com motor 1.0 turbo. (Diesel da Ranger e da Hilux e o sedã do A3 passaram a vir do pedido corrigido.)
- **Cabine dupla** da Ranger e da Hilux: vinha do "CD" da leitura de 28/10 na Mobiauto; o pedido corrigido não repete o "CD".
- **Hero:** a Ranger é o carro de estúdio do hero até a imagem do hero existir (escolha da v1: é o carro que o Paulo citou).
- **Horário da loja:** "8h às 18h" (dias e sábado a confirmar).
- **Link das notas do Google:** busca no Google Maps pelo nome e endereço, até termos o link exato das fichas.

## Pendências: confirmar com os donos

- CNPJ e ano de início da loja de veículos ("desde 2017" só como grupo).
- Dias de funcionamento e horário de sábado da loja (a oficina abre seg a sex, 8h às 18h).
- Condição especial na oficina para quem compra na loja (só mostrar se existir); se entrega em outros estados; autorização para fotos de entregas e do dono.
- Se há garantia e laudo cautelar; financeiras parceiras; documentos pedidos na avaliação.
- Se os carros vendidos passam por revisão na oficina do grupo antes da entrega.
- Quem atualiza o estoque; data de entrada de cada carro (para a ordem "mais recente").
- Cor, câmbio (quando não está na versão), cabine da Saveiro e opcionais de cada veículo.
- Link exato das fichas do Google da loja e da oficina.
- Logo em alta resolução; domínio e e-mail.
- Se a bio "novos e semi novos" deve mudar para "seminovos e usados".
