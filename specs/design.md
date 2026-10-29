# MVA Multicar: design

Identidade nova (rebranding de demonstração): moderna, limpa e profissional, mantendo o reconhecimento da marca (nome MVA, vermelho, preto/grafite, prata e branco), sem o visual cromado/3D atual. Estrutura e proporções inspiradas na referência; código, textos, imagens, nome e marca da referência não são copiados.

## 1. Referência de estrutura (print da página inicial, 1440 px)

Os arquivos `ref-estrutura-kavak.md` e `solucoes-secoes-mva.md` citados no pedido não existiam em 29/10/2026. Esta descrição foi feita a partir do print anexado ao prompt; corrigir se os arquivos aparecerem.

Medidas aproximadas, convertidas do print para 1440 px:

| Bloco | Medidas e comportamento | Na MVA |
|---|---|---|
| Cabeçalho | Branco, ~60 px, logo à esquerda, menu com 6 itens à direita, ações (favoritos, cadastro) | 64 px, menu de 6 itens, botão WhatsApp vermelho |
| Hero | Foto de largura total, ~370 px, escurecida; título centralizado branco ~32 px; subtítulo; campo de busca em pílula (~280 px); 3 pílulas de ação abaixo | Imagem fixa 480 px, mesma hierarquia, busca de 560 px |
| Cards de serviço | 3 lado a lado, ~307 × 160 px, cantos ~8 px, texto à esquerda e imagem à direita | 3 cards de 184 px, texto à esquerda sobre branco, imagem à direita |
| Faixa cinza | Fundo cinza, 3 cartões brancos de ~130 px (vender/trocar, vistos, buscas recomendadas) | Igual, com conteúdo da MVA |
| Conteúdo editorial | 3 cards de blog com imagem | Cortado (sem conteúdo equivalente) |
| Prova social numérica | 3 colunas com ícone, título e texto | "Por que a MVA", só com fatos reais |
| Vitrines de carros | 2 carrosséis de 5 cards (~182 px), foto de estúdio, nome pequeno, preço; seta | Uma vitrine única de cards maiores (~248 px) com versão, ano, km, preço e WhatsApp |
| Vídeos / dicas | 4 cards em retrato com faixa de título | "Oficina ao lado": 4 cards em retrato dos serviços |
| Como funciona | Abas Comprar / Vender + 3 passos | Igual |
| Depoimentos | Grade 2 × 2 | Substituído por notas reais do Google com link |
| Tipos de carro | 8 ícones de carroceria | 4 ícones (Hatch, Sedã, SUV, Picape) |
| Continue sua busca | Acordeão com 10 grupos de links | Listas de links por preço, marca e carroceria |
| Rodapé | Preto, logo, colunas de links, redes, linha legal | Preto, as duas unidades, links, notas de demonstração |

Proporções que definem o visual: **conteúdo estreito (~960 px) com margens largas**, títulos de seção pequenos (~20 px, à esquerda), fundo claro com cards brancos, bordas finas, quase sem sombra, muito ar entre seções (~56 px), imagens de carro em estúdio claro.

## 2. Logo (proposta)

Redesenho simples a partir do atual, em vetor (`src/_data/logotipo.js`):

- "MVA" em letras retas, largas e inclinadas (12°), desenhadas como polígonos: o M em vermelho, o VA em grafite (fundo claro) ou prata (fundo escuro). O V e o A se encaixam pela diagonal, formando um bloco compacto.
- Três traços de velocidade à esquerda, em vermelho, de comprimentos decrescentes: a lembrança dos traços do logo antigo.
- O anel e o efeito cromado/3D saem. "MULTICAR" vai ao lado, em versais espaçadas, separado por um fio vertical. A oficina usa o mesmo sistema: MVA | CENTRO AUTOMOTIVO.
- Ícone (favicon e app): o M com os traços sobre quadrado grafite de cantos arredondados.
- Versões: clara (cabeçalho), escura (rodapé), ícone. Área de respiro: altura do M ÷ 2. Tamanho mínimo: 24 px de altura do MVA.

## 3. Paleta e contraste

Contrastes calculados pela fórmula WCAG 2.x (29/10/2026). Uma única cor de ação: o vermelho da marca, que já passa AA para texto normal; não precisou de ajuste de tom.

| Token | Hex | Uso | Contraste conferido |
|---|---|---|---|
| `--acao` | #B2251D | Botões, links de ação, foco, selo | Sobre branco 6,61:1; sobre `--fundo` 6,07:1; branco sobre ele 6,61:1 |
| `--acao-escura` | #951E17 | Hover e pressionado | Branco sobre ele 8,48:1 |
| `--acao-clara` | #FBEDEC | Fundo de realce | `--acao` sobre ele 5,80:1 |
| `--texto` | #1D1E22 | Texto principal (grafite) | Sobre branco 16,65:1; sobre `--fundo` 15,29:1 |
| `--texto-2` | #55585F | Texto secundário | Sobre branco 7,12:1; sobre `--fundo` 6,54:1 |
| `--texto-3` | #6B6E76 | Legendas, "a confirmar" | Sobre branco 5,10:1; sobre `--fundo` 4,68:1 |
| `--fundo` | #F5F5F7 | Fundo da página | — |
| `--superficie` | #FFFFFF | Cards | — |
| `--borda` | #E4E4E8 | Bordas decorativas de cards | Decorativa |
| `--borda-campo` | #8E9097 | Borda de campos e controles | Sobre branco 3,19:1 (mínimo 3:1 para componentes) |
| `--preto` | #0C0C0E | Rodapé, sobreposição do hero | Branco sobre ele 19,54:1 |
| `--prata` | #BFBEC0 | Texto e detalhes sobre preto | Sobre preto 10,55:1. **Nunca** texto sobre branco (1,85:1) |
| `--prata-clara` | #EBEBED | Faixas, divisores | Sobre grafite 13,99:1 |
| `--vermelho-escuro-bg` | #E0484B | M do logo e detalhes sobre preto | Sobre preto 4,84:1 |

Texto branco sobre o hero: sobreposição preta de 50% a 70% garantida em toda a área do texto (o contraste final depende da imagem; conferir quando ela chegar).

## 4. Tipografia

- **Inter** (variável, licença SIL OFL 1.1, `licencas/OFL-Inter.txt`), hospedada em `src/assets/fontes/`, subconjuntos latin e latin-ext, `font-display: swap`, `preload` do latin. Neogrotesca neutra no espírito da Helvetica, muito legível em tela, com algarismos tabulares para preço e km.
- Pesos: 400 (corpo), 500 (rótulos), 600 (botões, preços nos cards), 700 (títulos), 800 (preço na página do veículo).

| Uso | Tamanho | Altura de linha | Peso | Espaçamento |
|---|---|---|---|---|
| Título do hero | clamp(2rem → 3rem) | 1,1 | 700 | -0,025em |
| Título da página do veículo | clamp(1.5rem → 2rem) | 1,15 | 700 | -0,02em |
| Título de seção | clamp(1.375rem → 1.75rem) | 1,2 | 700 | -0,02em |
| Título de card | 1.0625rem | 1,3 | 700 | -0,01em |
| Corpo | 1rem | 1,55 | 400 | 0 |
| Pequeno | 0.875rem | 1,45 | 400/500 | 0 |
| Etiqueta ("Imagem ilustrativa") | 0.6875rem | 1 | 500 | 0,01em |
| Preço no card | 1.25rem | 1,1 | 700, tabular | -0,01em |
| Preço na página | clamp(1.75rem → 2.25rem) | 1 | 800, tabular | -0,02em |

## 5. Espaçamentos e grade

- Base 4 px: 4, 8, 12, 16, 24, 32, 48, 64, 96.
- Conteúdo: largura máxima **1040 px** (proporção estreita da referência) + margem lateral de 16 px (celular) e 24 px (≥ 768 px).
- Seções: 56 px entre seções no computador, 40 px no celular. Título de seção → conteúdo: 20 px.
- Grades: cards de serviço 3 colunas (gap 16); vitrine 4 colunas a partir de 1024 px e 2 entre 768 e 1023 (gap 16), carrossel com rolagem nativa no celular (cards de 78% da largura, mostrando a ponta do próximo).

## 6. Componentes

**Cards:** fundo branco, borda 1 px `--borda`, cantos 12 px, sem sombra em repouso; no hover (só com mouse), borda um tom mais escura e sombra quase nula (0 6px 18px rgba(12,12,14,.06)).

**Card de veículo:** imagem 3:2 (sem corte) com etiqueta "Imagem ilustrativa" no canto inferior esquerdo e selo "Destaque" opcional no canto superior esquerdo; marca e modelo (título), versão (1 linha), ano · km, preço e, embaixo, o botão "Chamar no WhatsApp" em contorno vermelho na largura do card (preço e botão lado a lado não cabem em 248 px). O card inteiro leva à página; o botão WhatsApp fica por cima, clicável à parte.

**Botões:**
- Primário: fundo `--acao`, texto branco, 48 px de altura (44 no mínimo), cantos 10 px, peso 600; hover `--acao-escura`.
- Secundário: fundo branco, texto grafite, borda `--borda-campo`.
- Contorno: fundo branco, texto e borda `--acao`; hover preenchido. Usado no WhatsApp dos cards de veículo, para a grade não ficar pesada.
- Link de ação: texto `--acao`, peso 600, com seta.
- Pílulas do hero: fundo branco 14%, borda branca 35%, texto branco; hover branco com texto grafite.
- Foco: contorno 3 px `--acao` com afastamento de 2 px (branco sobre fundos escuros).

**Campo de busca:** pílula branca de 56 px, ícone de lupa, botão "Buscar" vermelho dentro do campo.

**Etiquetas:** "Imagem ilustrativa" em fundo branco 88%, texto grafite, cantos 4 px; "imagem a definir" nos blocos provisórios; "a confirmar" em `--texto-3` itálico.

**Faixa de demonstração:** 32 px, fundo grafite, texto `--prata-clara`, 13 px, no topo de todas as páginas (não fixa). Abaixo de 560 px o texto encurta para "Projeto de demonstração · não oficial" e cabe numa linha.

**Movimento e primeira tela:** o JavaScript só prepara a animação dos elementos que estão abaixo da primeira tela no carregamento; o que já aparece fica parado (ver §8).

**Cabeçalho:** 64 px (56 no celular), branco, fixo no topo ao rolar, borda inferior 1 px. No celular: logo, botão WhatsApp só com ícone e botão de menu.

## 7. Ícones e imagens

**Ícones:** desenho próprio em SVG, traço 1,75 px, cantos arredondados, 24 px, `currentColor` (`lib/icones.js`). Sem logos de terceiros; o botão de WhatsApp usa um balão de conversa genérico com a palavra "WhatsApp".

**Imagens, dois tipos:**
1. **Veículos:** só as imagens de estúdio de `imagens-geradas/`, na vitrine e na página do veículo, nunca alteradas, sempre com "Imagem ilustrativa".
2. **Dia a dia e ilustração:** cenas da marca (atendimento, assinatura, entrega com laço vermelho no capô, avaliação para troca, financiamento, oficina, documentos e chaves, pátio) e ilustrações planas quando não fizer sentido mostrar pessoas. Pessoas fictícias, sem logos, sem texto legível, sem lugar real, luz natural suave, paleta neutra com o vermelho da marca como único acento. Todas com "Imagem ilustrativa". Prompts e enquadramentos em `imagens.md`.

Enquanto a imagem não existe: bloco neutro (#D9D9DE em fundo claro; #3A3B40 no hero) com "imagem a definir", no tamanho e na proporção finais.

## 8. Movimento (moderado)

CSS e JavaScript puro com IntersectionObserver; nenhuma biblioteca.

- **Assinatura, o carro chegando:** nos cards de veículo (e, no site completo, nas faixas com carro), a imagem desliza da esquerda (translateX -7% e escala 1,1 → posição final) em 0,9 s com desaceleração suave, enquanto três traços vermelhos, os traços de velocidade do logo, cruzam o quadro e somem. Atraso de 80 ms entre cards. Dispara uma vez, quando 35% do card aparece. A imagem nunca fica invisível nem sai do quadro.
- Títulos de seção e cards de serviço: subida de 12 px com opacidade, 0,5 s. Nunca em elementos com preço, ano, km, fotos ou WhatsApp.
- Hover: troca de cor 150 ms; leve aproximação (1,03) da imagem do card de veículo no computador.
- Sem animação no hero e na primeira imagem da página do veículo (não atrasar a primeira tela).
- `prefers-reduced-motion: reduce`: nenhuma animação nem rolagem suave. Sem JavaScript: tudo aparece no lugar, sem efeito.

## 9. Celular e computador

| | Celular (até 767 px) | Computador (1024 px ou mais) |
|---|---|---|
| Cabeçalho | 56 px, menu em painel | 64 px, menu em linha |
| Hero | ~540 px de altura, texto centralizado, busca na largura toda | 480 px, busca de 560 px |
| Cards de serviço | Empilhados, 160 px de altura | 3 colunas, 184 px |
| Vitrine | Carrossel com rolagem nativa | Grade de 4 colunas |
| Página do veículo | Galeria de borda a borda com deslizar; barra fixa inferior com preço e WhatsApp | Galeria + miniaturas à esquerda, painel fixo à direita (360 px) |
| Ficha técnica | 2 colunas | 3 colunas |

Pontos de quebra: 480, 768, 1024 px. Testar sempre 390 e 1440 px.
