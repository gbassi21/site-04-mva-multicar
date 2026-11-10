# MVA Multicar: design (Amostra v1)

Identidade nova (rebranding de demonstração): preto e vermelho dominam, como assinatura da marca; prata e branco dão respiro. Moderna, limpa e profissional, sem o cromado/3D do logo atual. Estrutura e proporções da referência (`referencias/ref-estrutura-kavak.md`), com as soluções de `referencias/solucoes-secoes-mva.md`; código, textos, imagens, nome e marca da referência não são copiados.

Histórico: a v0 (29/10/2026) usava conteúdo de 1040 px, vermelho #B2251D e fundo quase todo claro; o Paulo achou fraca e genérica. A v1 (mesmo dia) troca isso pelo que está abaixo; o registro das trocas está em `memoria.md`.

## 1. Referência (medidas da página inicial em 1440 px)

| Item | Referência | MVA (v1) |
|---|---|---|
| Conteúdo | ~1360 px, começa a 33 px da borda | Até 1360 px, margem 32 px (24 em tablet, 16 no celular) |
| Cabeçalho | 84 px, branco, logo + 6 links | 76 px (64 no celular), branco, fixo, logo + 5 links (Estoque, Vender ou trocar, Financiamento, Oficina, Contato) + WhatsApp; ícones dos links só a partir de 1366 px |
| Hero | Foto escurecida ~520 px, texto centralizado | Fundo preto, texto à esquerda, imagem grande à direita sangrando até a borda |
| Título do hero | 40 px / 700 | 64 px / 800 (40 no celular) |
| Título de seção (H2) | 28 px / 700, à esquerda, link de ação à direita | 36 px / 800, traços do logo à esquerda e sublinhado vermelho; link à direita |
| Cards de serviço | 3 × ~432 px, cor ou foto, título de 2 linhas | 3 cards de 300 px de altura: vermelho, grafite e preto |
| Cards de carro | 262 × 204 px, cantos 16, borda #E7E9EE | Cantos 16, borda #E4E4E8, preço 24 px / 800, botão WhatsApp |
| Tipos de carro | 184 × 84 px com ícone | 4 cards com silhueta vermelha, viram pretos no hover |
| Fundo | cinza-claro alternado com branco | Ritmo preto / branco / cinza / vermelho (§5) |
| Cor de ação | Uma só (azul) | Uma só: vermelho #D7191F |

## 2. Logo

Redesenho em vetor (`src/_data/logotipo.js`): "MVA" em letras retas, largas e inclinadas 12°; M vermelho, VA grafite (fundo claro) ou prata (fundo escuro); três traços de velocidade à esquerda; sem anel e sem cromado. "MULTICAR" ao lado, em versais espaçadas, depois de um fio vertical. Ícone do site: o M com os traços sobre quadrado grafite.

**Os traços de velocidade são o elemento gráfico da identidade** (`tracos()` em `lib/icones.js`): atrás da imagem do hero, como marca dos títulos de seção, nos blocos de marca, no card "Ver todo o estoque", na faixa vermelha, no painel do veículo e no rodapé.

## 3. Paleta e contraste

Contraste pela fórmula WCAG 2.x, conferido em 29/10/2026.

| Token | Hex | Uso | Contraste |
|---|---|---|---|
| `--vermelho` | #D7191F | Ação (botões, links), faixa CTA, selos, sublinhado de títulos, números do "Como funciona", ícones de destaque | Branco sobre ele 5,19:1; ele sobre branco 5,19:1; sobre `--cinza` 4,64:1. Sobre preto 3,77:1: só gráfico ou texto grande |
| `--vermelho-escuro` | #B2251D | Hover e pressionado; traços sobre a faixa vermelha | Branco sobre ele 6,61:1 |
| `--vermelho-no-preto` | #FF3B41 | Ícones e detalhes pequenos sobre preto | Sobre preto 5,54:1 |
| `--preto` | #0C0C0E | Hero, faixa da oficina, rodapé, faixa de demonstração, chips ativos | Branco sobre ele 19,54:1 |
| `--grafite` | #1D1E22 | Texto principal, card de serviço grafite | Sobre branco 16,65:1; sobre `--cinza` 14,89:1 |
| `--grafite-2` | #17181B | Cards sobre preto (serviços da oficina) | Branco sobre ele 17,75:1 |
| `--cinza` | #F2F2F4 | Fundo das seções cinza | — |
| `--texto-2` | #55585F | Texto secundário | Sobre `--cinza` 6,37:1 |
| `--texto-3` | #6B6E76 | Legendas, "a confirmar" | Sobre `--cinza` 4,56:1 |
| `--prata` | #BFBEC0 | Texto secundário sobre preto | Sobre preto 10,55:1; sobre `--grafite-2` 9,59:1. Nunca sobre branco |
| `--borda` / `--borda-campo` | #E4E4E8 / #8E9097 | Bordas de cards / de campos | Campo sobre branco 3,19:1 |

Texto sobre a faixa vermelha: sempre branco puro (tons rosados ficam abaixo de 4,5:1).

### 3.1 Modo escuro e contraste aumentado (03/11/2026)

Por padrão o site segue a aparência do aparelho (`prefers-color-scheme`). **Botão sol/lua** no cabeçalho a partir de 1024 px, antes dos favoritos (44 px, ícones `sun` e `moon` do Lucide); abaixo de 1024 px vira a última linha do menu ☰ ("Mudar para o tema escuro" / "claro", com o ícone do tema atual), para o cabeçalho não acumular ícones: mostra o sol no tema claro e a lua no escuro; o clique troca o tema (esmaecimento curto, com o ícone girando) e guarda a escolha neste navegador (`localStorage`, `mva-tema`). Sem escolha guardada, acompanha o aparelho, inclusive se ele mudar com a página aberta. O tema é aplicado por um script no `<head>`, antes do primeiro desenho, em `html[data-tema]`; sem JavaScript, não há botão e o site segue o aparelho. Preto e vermelho continuam dominando; só os neutros trocam, nos mesmos tokens:

| Token | Claro | Escuro |
|---|---|---|
| `--branco` (superfícies: cards, seções brancas, painéis) | #FFFFFF | #1C1D21 |
| `--cinza` (seções cinza; base, mais escura que as superfícies) | #F2F2F4 | #121215 |
| `--texto` / `--texto-2` / `--texto-3` | #1D1E22 / #55585F / #6B6E76 | #ECECEF / #B4B6BC / #9C9EA5 |
| `--borda` / `--borda-forte` / `--borda-campo` | #E4E4E8 / #CFCFD5 / #8E9097 | #2E2F35 / #46474E / #74767E |
| `--acento` (vermelho como texto e ícone) | #D7191F | #FF3B41 |

- `--preto`, `--vermelho` e o texto branco sobre eles não mudam. O fundo de estúdio das fotos (`--estudio`) também não: as fotos não são alteradas.
- No escuro, o "VA" do logo fica prata e o M e os traços ficam #E0484B; o chip escolhido e as etiquetas de filtro invertem para branco com texto preto (o preto sumiria no fundo escuro).
- `prefers-contrast: more`: textos secundários viram texto principal e as bordas escurecem.
- Contraste conferido nas 10 páginas, nos dois modos, com um script WCAG (texto ≥ 4,5:1; grande ≥ 3:1): nenhuma falha.

## 4. Tipografia

Inter (variável, OFL 1.1, local, `licencas/OFL-Inter.txt`), neogrotesca neutra no espírito da Helvetica. Pesos: 400 corpo, 600 rótulos, 700 botões, 800 títulos e preços, 900 números grandes.

| Uso | Tamanho | Peso | Espaçamento |
|---|---|---|---|
| H1 do hero | clamp(2.5rem → 4rem): 64 px no computador | 800 | -0,04em, entrelinha 1,02 |
| H1 da página do veículo | clamp(1.75rem → 2.375rem) | 800 | -0,035em |
| H2 de seção | clamp(1.75rem → 2.25rem): 36 px no computador | 800 | -0,03em |
| Título de card de serviço | 28 px (24 no celular) | 800 | -0,025em |
| Nome do carro no card | 19 px | 800 | -0,02em |
| Preço no card | 24 px, algarismos tabulares | 800 | -0,025em |
| Preço na página do veículo | clamp(2rem → 2.75rem) | 900 | -0,04em |
| Números do "Como funciona" | 88 px, inclinados 12° como o logo | 900 | -0,05em |
| Corpo | 16 px, entrelinha 1,55 | 400 | 0 |
| Etiqueta "Imagem ilustrativa" | 11 px | 500 | 0,01em |

## 5. Grade e ritmo

- Conteúdo até 1360 px; margem 32 / 24 / 16 px. Base de espaçamento 4 px.
- Seções: 88 px (computador), 72 (tablet), 56 (celular).
- Ritmo da home: cabeçalho branco → hero **preto** → serviços e confiança **branco** → vitrine **cinza** → tipos **branco** → oficina **preto** → como funciona **cinza** → avaliações **branco** → CTA **vermelho** → rodapé **preto**.
- Grades: serviços 3 colunas (carrossel no celular, card de 86%); vitrine 4 colunas a partir de 1024 px, 2 entre 768 e 1023, carrossel no celular (card de 82%); tipos 4 colunas (2 no celular); oficina 5/7 com serviços em 4 × 2 (2 colunas no celular); como funciona 4/8 com 3 passos.

## 6. Componentes

- **Cards:** cantos 16 px, borda 1 px, sem sombra em repouso; no hover, borda mais escura e sombra leve (0 10px 30px rgba(12,12,14,.08)).
- **Card de serviço:** fundo de cor da marca (vermelho, grafite, preto), texto branco, ícone num quadrado translúcido, título de 2 linhas, texto curto, ação com seta. Com a imagem real, ela cobre o card com véu escuro à esquerda.
- **Card de veículo:** foto 3:2 sem corte; selo vermelho de carroceria (canto superior esquerdo, cortado em diagonal como os traços); selo "Destaque" preto opcional; etiqueta "Imagem ilustrativa"; nome, versão, dados com ícone (ano, km, câmbio quando conhecido), preço e botão "Chamar no WhatsApp" **secundário** (contorno, glifo no vermelho de acento) na largura do card. Desde 03/11/2026 (HIG: uma ou duas ações em destaque por tela), o vermelho cheio fica para a ação principal de cada tela.
- **Card "Ver todo o estoque":** preto, traços vermelhos, seta num círculo vermelho.
- **Botões:** primário vermelho com texto branco (48 px; 56 px no tamanho grande; cantos 12 px; peso 700); secundário branco com borda; branco com texto vermelho na faixa vermelha; contorno claro sobre preto. Foco: contorno 3 px vermelho (branco sobre fundos escuros).
- **Busca do hero:** pílula branca, lupa, botão "Buscar" vermelho. Pílulas Comprar / Vender / Trocar em contorno branco com ícone vermelho.
- **Filtros da vitrine:** painel branco; chips de carroceria (ativo preto com contador vermelho; tipos sem carro ficam ocultos até serem escolhidos pelo "Explore por tipo"); selects de marca, ano a partir de, câmbio e preço até; "Limpar"; contagem ao vivo.
- **Selos:** paralelogramo vermelho (mesma inclinação dos traços).
- **Faixa de confiança:** bloco único com 3 itens divididos por linhas, ícone branco em paralelogramo vermelho.
- **Avaliações:** card com borda superior vermelha, nota grande, estrelas preenchidas na proporção da nota, quantidade e link "Ver todas no Google".
- **Comentários do Google (03/11/2026):** com a chave em `loja.googleMaps.chave`, a seção busca no Google Maps (Maps JavaScript API, biblioteca `places`), quando chega perto da tela, a nota, a quantidade e os comentários de cada unidade; mostra até 3 de **5 estrelas com texto** (`comentariosPorUnidade`), cada um num bloco cinza com foto, nome com link para o perfil, quando, estrelas e o texto inteiro. Nota e quantidade passam a ser as atuais. Abaixo, a fonte: "Comentários de 5 estrelas do Google Maps, carregados ao vivo. A nota acima considera todas as avaliações." Sem chave, sem resposta ou sem comentário de 5 estrelas, fica só a nota. Depoimentos fixos: só os autorizados pelos autores (`loja.depoimentos`, origem em `referencias/pedido-do-cliente.md`), no mesmo bloco, com a inicial do nome num círculo grafite, "no Google Maps", 5 estrelas e o texto exato; a fonte diz "Avaliações de 5 estrelas publicadas no Google Maps, reproduzidas com autorização dos autores. A nota acima considera todas as avaliações." Quando os comentários ao vivo chegam, tomam o lugar dos fixos daquela unidade.
- **WhatsApp flutuante:** círculo vermelho de 60 px com o glifo do WhatsApp, canto inferior direito, em todas as páginas; na página do veículo, no celular, sobe acima da barra fixa. Usa o número da loja; a página da oficina usará `whatsappFlutuante: oficina`.
- **Favoritos (03/11/2026):** coração num círculo branco translúcido no canto superior direito do card e da galeria (salvo: vermelho preenchido, com pulinho); no cabeçalho, coração com contador vermelho (escondido em 0). Ele abre um painel de 420 px pela direita (largura total no celular), com foto, nome, versão, preço, "Remover" (a linha desliza para fora), "Perguntar sobre estes carros" no WhatsApp da loja com a lista e a nota "Ficam salvos só neste navegador". Lista vazia: explica e leva ao estoque. Só com JavaScript; a lista fica no `localStorage` (`mva-favoritos`), nada é enviado.
- **Faixa de demonstração:** preta, 13 px, no topo de todas as páginas; no celular, "Projeto de demonstração · não oficial".

## 7. Ícones e imagens

**Ícones:** Lucide (ISC), traço 2 px, em SVG local (`lib/icones/linha/`), usados no menu, cards de serviço, confiança, dados e ficha do veículo (ano, km, câmbio, combustível, motor, carroceria, tração, cabine, cor), endereço / horário / telefone, oficina e rodapé. Glifos oficiais do WhatsApp e do Instagram do Simple Icons (CC0, `lib/icones/glifos/`) em todos os botões e links desses canais. Silhuetas de carroceria (Hatch, Sedã, SUV, Picape) desenhadas no mesmo traço. Licenças em `licencas/`.

**Imagens:**
1. Veículos: só as de estúdio de `imagens-geradas/`, nunca alteradas, com "Imagem ilustrativa": vitrine, página do veículo e, **até `imagens-ia/ia-hero-entrega.png` existir, o hero** (capa da Ranger, definida em `carroHero` no topo de `src/index.njk`), com etiqueta de nome, preço e link para o carro.
2. Dia a dia e ilustração: geradas pelo Paulo (`imagens.md`). Enquanto o arquivo não existe, aparece um **bloco de marca** no tamanho final: fundo vermelho, grafite ou preto, ícone grande translúcido e traços do logo. O nome do arquivo esperado fica só num comentário do HTML. Quando o PNG entra em `imagens-ia/`, ele substitui o bloco sozinho.

## 8. Movimento

CSS e JavaScript puro; nenhuma biblioteca. Um momento orquestrado na abertura e a assinatura na vitrine; nada de "surgir" em cada seção.

- **Abertura (só no hero, no carregamento):** a imagem chega da direita (9% → 0, 1,1 s) com leve aproximação, e os três traços vermelhos correm por trás em sequência (0,25 s, 0,35 s, 0,45 s). A etiqueta de preço sobe 16 px. Nada fica invisível: só deslocamento.
- **Assinatura na vitrine:** os cards de veículo que estão abaixo da primeira tela chegam quando aparecem (imagem desliza para o lugar, traços vermelhos cruzam o quadro, 90 ms entre cards). O que já aparece no carregamento fica parado.
- **Interação:** hover em cards e botões (cor, seta que anda 3–6 px, silhueta que avança); rolagem suave da galeria e do "Explore por tipo".
- `prefers-reduced-motion: reduce`: nenhuma animação nem rolagem suave. Sem JavaScript: tudo aparece no lugar.

### 8.0 Revisão pelo Apple HIG (03/11/2026)

Referência: repositório `ebuntario/apple-hig` (resumo das Human Interface Guidelines). Aplicado ao site, sem mudar a identidade:

- **Mantido por decisão:** fonte Inter (o HIG prefere a do sistema; a Inter é próxima da SF e é a identidade) e o menu ☰ no celular (barra de abas é padrão de app, não de site).
- **Alvos de toque de 44 × 44 px** no celular: etiquetas de filtro, corações, "Remover", link do logo, links "Ver…", trilha, links do rodapé e dos contatos. Links dentro de frases ficam como texto.
- **Áreas seguras** (`env(safe-area-inset-*)`) no WhatsApp flutuante, na barra fixa e no painel de favoritos.
- **Hierarquia de botões:** uma ou duas ações vermelhas por tela; cards com botão secundário.
- **Aparência:** modo escuro automático, botão sol/lua (pedido depois da revisão; o HIG desaconselha um botão próprio, mas o site respeita o aparelho até a pessoa escolher) e contraste aumentado (§3.1); cabeçalho de vidro com transparência reduzida respeitada (§8.1).

### 8.1 Acabamento de interação (03/11/2026)

Adaptado do "prompt mestre" de e-commerce, só no que cabe numa loja de carros e não contradiz o §8 (nada de "surgir" por seção):

- **Resposta no toque:** botões afundam para `scale(.97)` no clique (chips, setas e menu `.94`; WhatsApp flutuante `.9`), em 80 ms.
- **Cabeçalho de vidro:** depois de 8 px de rolagem, fundo branco 86% com desfoque de 14 px e sombra leve; com `prefers-reduced-transparency`, branco sólido.
- **Troca de página:** esmaecimento de 0,22 s (`@view-transition`); cabeçalho e WhatsApp flutuante ficam parados.
- **Menu do celular:** desce 8 px aparecendo; os 4 links entram em sequência (40 ms).
- **Card de veículo (só com mouse):** sobe 3 px e a capa dá lugar à foto `02-frente` (esmaecimento de 0,45 s); a capa continua no HTML e no leitor de tela.
- **Galeria (computador):** lupa de 2× que segue o mouse.
- **Filtros:** etiquetas pretas dos filtros ativos com × (cada uma remove o seu filtro; entram com pulinho); o contador de cada carroceria considera os outros filtros e fica apagado quando zeraria o resultado; a contagem "N carros" sobe 6 px ao mudar.

## 9. Celular e computador

| | Celular (até 767 px) | Computador (1024 px ou mais) |
|---|---|---|
| Cabeçalho | 64 px; logo, coração dos favoritos, WhatsApp só com glifo, menu ☰ em painel com ícones e, por último, a linha "Mudar para o tema escuro/claro" | 76 px; 5 links (com ícone a partir de 1366 px), botão sol/lua, coração, botão do WhatsApp (com o número a partir de 1200 px) |
| Hero | Texto, busca e pílulas; imagem de borda a borda abaixo; etiqueta de preço sob a imagem | Texto à esquerda (5/12), imagem à direita (7/12) sangrando até a borda |
| Serviços | Carrossel com a ponta do próximo | 3 colunas |
| Filtros | Chips roláveis; selects em 2 × 2 | Chips e contagem numa linha; 4 selects + limpar |
| Vitrine | Carrossel | 4 colunas |
| Oficina | Texto e serviços em 2 colunas | 5/7 |
| Página do veículo | Galeria de borda a borda; barra preta fixa com preço e WhatsApp | Galeria + miniaturas; painel fixo de 420 px |

Pontos de quebra: 480, 768, 900, 1024, 1100 px. Testar sempre 390 e 1440 px.
