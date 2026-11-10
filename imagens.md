# MVA Multicar: inventário de imagens

Todas as imagens do site, existentes e faltantes. Direção visual em `specs/design.md` §7. Quem gera as imagens ilustrativas é o Paulo, no ChatGPT; o código não gera nem altera imagens de veículos.

## 1. Como incluir uma imagem ilustrativa

1. Gere no ChatGPT com o **bloco de consistência** (§5) seguido do prompt do item.
2. Salve como `imagens-ia/<nome>.png`, exatamente com o nome da tabela.
3. Rode `npm run dev`: o build encontra o arquivo e troca o bloco de marca (vermelho, grafite ou preto, com ícone e traços do logo) pela imagem, já com a etiqueta "Imagem ilustrativa". O nome esperado de cada arquivo está num comentário do HTML, no lugar do bloco.
4. Confira o enquadramento em 390 e 1440 px. Se o recorte cortar o assunto, ajuste o ponto de foco em `src/_data/ilustracoes.js` (campo `foco`).
5. Mude o status abaixo para "ok" e registre em `memoria.md` se houver ajuste.

## 2. Imagens ilustrativas (dia a dia e ilustração)

Pessoas fictícias (nunca apresentadas como a equipe ou os clientes da MVA), sem logos, sem texto legível, sem retratar lugar real, etiqueta "Imagem ilustrativa".

| Nº | Arquivo `imagens-ia/` | Seção (uso) | O que comunica | Tipo | Enquadramento | Proporção na tela | Gerar em | Área livre para texto | Status |
|---|---|---|---|---|---|---|---|---|---|
| I-01 | ia-hero-entrega.png | Início: hero (quadro grande à direita, sobre fundo preto) · /sobre/ "O laço vermelho" | O momento da conquista: entrega das chaves com o laço vermelho no capô (ritual real da loja) | Dia a dia | Carro 3/4 com laço + mãos trocando a chave, sem rostos; assunto central com folga nas bordas | 16:10 no computador, 3:2 no celular | 3:2, 1536 × 1024 | Canto inferior esquerdo sem nada importante (etiqueta de preço por cima) | Falta: até existir, o hero mostra a capa de estúdio da Ranger |
| I-02 | ia-card-avaliacao.png | Início: card "Venda ou troque" · topo de /vender-ou-trocar/ | Avaliação honesta do carro do cliente para troca | Dia a dia | Avaliador junto à roda, com tablet; assunto nos 55% da direita | ~1,9:1 (card) e 3:2 (página) | 3:2, 1536 × 1024 | 45% da esquerda | Falta: bloco de marca na amostra |
| I-03 | ia-card-financiamento.png | Início: card "Financiamento" · topo de /financiamento/ | Conversa clara, sem pressão, sobre financiamento | Dia a dia | Duas pessoas à mesa, papéis ilegíveis, caneta vermelha; direita | ~1,9:1 e 3:2 | 3:2, 1536 × 1024 | 45% da esquerda | Falta: bloco de marca na amostra |
| I-04 | ia-card-oficina.png | Início: card "Cuide do seu carro" · topo de /oficina/ | Oficina organizada e mecânico experiente ao lado da loja | Dia a dia | Mecânico sob o capô aberto; direita | ~1,9:1 e 3:2 | 3:2, 1536 × 1024 | 45% da esquerda | Falta: bloco de marca na amostra |
| I-05 | ia-oficina-alinhamento.png | /oficina/ (serviços; na home a faixa da oficina usa ícones) | Alinhamento 3D com equipamento moderno | Dia a dia | Carro no elevador com alvos nas rodas, mãos ajustando | 3:4 (card em retrato) | 2:3, 1024 × 1536 | 25% de baixo (título sobre degradê) | Falta |
| I-06 | ia-oficina-freios.png | /oficina/ (serviços; na home a faixa da oficina usa ícones) | Cuidado com segurança: freios | Dia a dia | Close de disco e pinça, mãos com luva | 3:4 | 2:3, 1024 × 1536 | 25% de baixo | Falta |
| I-07 | ia-oficina-oleo.png | /oficina/ (serviços; na home a faixa da oficina usa ícones) | Manutenção de rotina: troca de óleo | Dia a dia | Mão despejando óleo de frasco sem rótulo | 3:4 | 2:3, 1024 × 1536 | 25% de baixo | Falta |
| I-08 | ia-oficina-pneus.png | /oficina/ (serviços; na home a faixa da oficina usa ícones) | Pneus e balanceamento | Dia a dia | Roda na balanceadora, mãos colocando o peso | 3:4 | 2:3, 1024 × 1536 | 25% de baixo | Falta |
| I-09 | ia-assinatura-contrato.png | /financiamento/ (ao lado do formulário) · /vender-ou-trocar/ (seção Troca) | Negócio fechado com segurança | Dia a dia | Close de mãos assinando, caneta vermelha, chave | 3:2 ou 16:9 | 3:2, 1536 × 1024 | Terço esquerdo | Falta |
| I-10 | ia-documentos-chaves.png | Reserva ("O que levar" usa ícones por enquanto) | Organização: documentos e chaves | Dia a dia | Vista de cima: pasta, folhas ilegíveis, duas chaves | 3:2 | 3:2, 1536 × 1024 | 35% da esquerda | Falta |
| I-11 | ia-detalhe-placa.png | Reserva (sem lugar definido) | Atenção aos detalhes e à documentação | Dia a dia | Traseira de carro prata, placa desfocada e ilegível | 3:2 | 3:2, 1536 × 1024 | Metade esquerda | Falta |
| I-12 | ia-atendimento-loja.png | Topo de /sobre/ | Atendimento acolhedor, sem pressa | Dia a dia | Vendedor abrindo a porta para um casal; 60% central | 3:2 | 3:2, 1536 × 1024 | Faixa superior | Falta |
| I-13 | ia-patio-loja.png | /sobre/ "Venha ver de perto" | Pátio coberto, organizado (genérico, não o endereço real) | Dia a dia | Fila de carros sob tenda branca, sem pessoas | 16:9 | 3:2, 1536 × 1024 | Terço superior | Falta |
| I-14 | ia-ilustra-troca.png | Reserva (a faixa cinza da home não entrou na v1) | Troca simples: seu carro vira o próximo | Ilustração | Dois carros e setas circulares vermelhas, centralizado | 1:1 (~120 px) | 1:1, 1024 × 1024 | — | Falta |
| I-15 | ia-ilustra-localizacao.png | Topo de /contato/ | As duas unidades lado a lado na mesma avenida | Ilustração | Mapa sem nomes, pino vermelho (loja) e grafite (oficina) | 3:2 | 3:2, 1536 × 1024 | 40% da esquerda | Falta |
| I-16 | ia-ilustra-404.png | Reserva (a 404 usa os traços do logo) | Caminho errado, sem drama | Ilustração | Carrinho numa bifurcação com placa em branco | 1:1 | 1:1, 1024 × 1024 | — | Falta |

## 3. Veículos (estúdio, `imagens-geradas/`)

Nunca gerar nem alterar. Sempre com "Imagem ilustrativa". Formato conferido: 3:2, 1536 × 1024 px (PNG). Ignorar os arquivos `_mapa.csv`.

### 3.1 As 13 tomadas padrão (por veículo)

| Nº | Arquivo | Uso |
|---|---|---|
| 01 | 01-capa.png | Card da vitrine (3:2, sem corte) e 1ª imagem da galeria; obrigatória para o carro aparecer |
| 02 | 02-frente.png | Galeria |
| 03 | 03-lateral.png | Galeria |
| 04 | 04-traseira-34.png | Galeria |
| 05 | 05-traseira.png | Galeria |
| 06 | 06-porta-malas.png | Galeria (caçamba nas picapes) |
| 07 | 07-farol.png | Galeria |
| 08 | 08-lanterna.png | Galeria |
| 09 | 09-roda.png | Galeria |
| 10 | 10-retrovisor.png | Galeria |
| 11 | 11-painel.png | Galeria |
| 12 | 12-volante.png | Galeria |
| 13 | 13-destaque.png | Galeria |

### 3.2 Situação por veículo (29/10/2026)

| Pasta | Situação | No site |
|---|---|---|
| ford-ranger-limited-2018 | 13/13 padronizadas | Amostra |
| renault-duster-dynamique-2016 | 13/13 padronizadas | Amostra |
| vw-saveiro-2014 | 13/13 padronizadas | Amostra |
| audi-a3-sedan-prestige-2020 | 13 arquivos com nomes do ChatGPT | Aguardando nomes padrão |
| chevrolet-prisma-lt-2019 | 12 arquivos com nomes descritivos | Aguardando nomes padrão |
| fiat-fastback-impetus-2024 | 13 arquivos com nomes descritivos | Aguardando nomes padrão (ver alerta em `CONTINUIDADE.md`) |
| hyundai-hb20-comfort-2024 | 12 arquivos com nomes descritivos | Aguardando nomes padrão |
| toyota-hilux-srv-2022 | 14 arquivos com nomes descritivos | Aguardando nomes padrão |
| toyota-corolla-cross-xre-2024 | Só um .zip | Aguardando extração e nomes padrão |
| vw-polo-highline-tsi-2025 | Só um .zip | Aguardando extração e nomes padrão |
| chevrolet-onix-lt-2020 | 13/13 (ZIP de 05/11/2026) | **Exemplo** fictício |
| hyundai-hb20-comfort-2019 | 13/13 (ZIP de 05/11/2026) | **Exemplo** fictício |
| volkswagen-polo-msi-2020 | 13/13 (ZIP de 05/11/2026) | **Exemplo** fictício |
| fiat-argo-drive-2021 | 13/13 (ZIP de 05/11/2026) | **Exemplo** fictício |
| toyota-corolla-xei-2020 | 13/13 (ZIP de 05/11/2026) | **Exemplo** fictício |
| honda-civic-exl-2018 | 13/13 (ZIP de 05/11/2026) | **Exemplo** fictício |
| chevrolet-tracker-lt-2021 | 13/13 (ZIP de 05/11/2026) | **Exemplo** fictício |
| jeep-renegade-longitude-2019 | 13/13 (ZIP de 05/11/2026) | **Exemplo** fictício |
| fiat-strada-freedom-2022 | 13/13 (ZIP de 05/11/2026) | **Exemplo** fictício |

Os 9 do ZIP usam três nomes novos, já reconhecidos em `lib/veiculos.js`: `04-traseira-tres-quartos` (Traseira 3/4), `06-traseira-elevada` (Traseira vista de cima; Caçamba vista de cima nas picapes) e `13-bancos` (Bancos).

## 4. Marca e ícones (feitos em código)

| Nº | Arquivo | Uso | Status |
|---|---|---|---|
| M-01 | `src/_data/logotipo.js` (versão clara) | Cabeçalho | Proposta na amostra |
| M-02 | `src/_data/logotipo.js` (versão escura) | Rodapé | Proposta na amostra |
| M-03 | `/favicon.svg` | Aba do navegador | Gerado no build |
| M-04 | `/icone-180.png`, `/icone-512.png` | Atalho no celular | Gerado no build |
| M-05 | `/og-mva.jpg` (1200 × 630) | Prévia do link no WhatsApp; logo sobre grafite, sem veículo | Gerado no build |
| M-06 | Ícones de traço Lucide e glifos de WhatsApp e Instagram (`lib/icones/`, licenças em `licencas/`) | Menu, serviços, confiança, dados e ficha do veículo, contato, oficina, rodapé, WhatsApp flutuante | Na amostra v1 |
| M-07 | Silhuetas de carroceria: Hatch, Sedã, SUV, Picape (`lib/icones.js`) | "Explore por tipo" | Na amostra v1 |
| M-08 | Traços de velocidade (`tracos()` em `lib/icones.js`) | Hero, títulos, blocos de marca, faixa vermelha, cards, rodapé | Na amostra v1 |

## 5. Prompts para o ChatGPT

Cole o bloco de consistência antes de cada prompt, ou envie-o uma vez no começo da conversa e depois um prompt por vez. Salve cada resultado em `imagens-ia/` com o nome indicado.

### 5.0 Bloco de consistência visual (único)

```text
VISUAL CONSISTENCY BLOCK — apply to every image in this series.
Context: images for the website of a modern, clean, trustworthy used-car dealership and its neighbouring car workshop in a coastal town in southeastern Brazil. Fictional scenes: they must not depict any real business, real person or real place.
PHOTOS: photorealistic editorial photography, full-frame camera, 35–50 mm lens, eye level, shallow depth of field (f/2.8–f/4). Soft natural daylight (bright overcast or open shade under a white canopy, or large windows indoors), gentle contrast, true-to-life colours, neutral white balance, no HDR look, no heavy colour grading, no lens flare.
ILLUSTRATIONS: flat vector illustration, minimal and geometric, rounded shapes, no outlines (or a single 2 px graphite line where needed), no gradients, no textures, generous white space, plain white background.
PALETTE (photos and illustrations): white #FFFFFF, light grey #F5F5F7, concrete grey, graphite #1D1E22, silver #BFBEC0, and deep brand red #B2251D as the ONLY saturated accent, used sparingly and only where the prompt asks. No other strong colours (no blue, green, orange or yellow accents).
PEOPLE: fictional adults only, varied Brazilian appearance and ages, natural relaxed expressions, not looking at the camera, plain clothing in white, grey, graphite or navy with no logos and no printed text. No children.
CARS: generic modern cars that do not copy any specific model, with no manufacturer badges or emblems, clean and well kept, in silver, grey, white or black. Licence plates, if visible, are blank or out of focus with no readable characters.
STRICT RULES: no readable text, letters or numbers anywhere (signs, screens, papers, tools, bottles and plates must be blank or unreadable); no logos or brand marks of any kind; no recognisable real place or storefront; no watermark, frame or border; realistic hands with five fingers.
```

### I-01 · imagens-ia/ia-hero-entrega.png

```text
Follow the VISUAL CONSISTENCY BLOCK (photo).
Output: landscape 3:2, 1536 × 1024 px. File name: ia-hero-entrega.png
Scene: the hand-over of a car at a tidy used-car lot under a large white tensile canopy. A clean silver compact SUV in three-quarter front view, with a big glossy deep red (#B2251D) satin ribbon bow tied on the bonnet. In the foreground, slightly below the centre, two hands exchanging a car key: a salesperson's hand in a graphite sleeve and a customer's hand. Hands and forearms only, no faces. Two or three other generic cars softly out of focus in the background, smooth concrete floor.
Composition: the car with the bow and the hands fill the centre of the frame with comfortable margins on every side; the image is shown as a large framed picture next to the headline (cropped to 16:10 on desktop, full 3:2 on phones), with no text over it. Keep the lower-left corner free of important details, because a small price tag will overlap it. Bright background that contrasts with a black page.
Mood: celebratory but understated, warm, trustworthy.
```

### I-02 · imagens-ia/ia-card-avaliacao.png

```text
Follow the VISUAL CONSISTENCY BLOCK (photo).
Output: landscape 3:2, 1536 × 1024 px. File name: ia-card-avaliacao.png
Scene: a car appraisal for a trade-in. A fictional appraiser (adult, graphite polo shirt without logos) crouches beside the front wheel of a generic grey hatchback, checking the tyre tread with one hand and holding a tablet with a blank, softly lit screen in the other. Under a white canopy, concrete floor, daylight.
Composition: the person and the car fill the RIGHT 55% of the frame. The LEFT 45% is a calm, bright, almost empty area (soft out-of-focus light-grey wall or canopy) with no objects, because a dark tint with a white title and a short text will cover it. The image will be cropped to a short, wide card (about 1.9:1): keep the head and the tyre away from the top and bottom edges.
Mood: careful, honest, professional.
```

### I-03 · imagens-ia/ia-card-financiamento.png

```text
Follow the VISUAL CONSISTENCY BLOCK (photo).
Output: landscape 3:2, 1536 × 1024 px. File name: ia-card-financiamento.png
Scene: a conversation about car financing at a light wooden desk in a bright, minimal showroom office. A fictional consultant (graphite blazer, white shirt) explains something to a fictional customer, both seen in profile or three-quarter view. On the desk: a few sheets of paper with only grey unreadable lines, a calculator with a blank display, a car key, and a deep red (#B2251D) pen as the only colour accent. Soft light from a large window.
Composition: people and desk fill the RIGHT 55% of the frame; the LEFT 45% is a calm, bright, almost empty area (out-of-focus light wall) for text. Will be cropped to about 1.9:1: keep heads away from the top edge.
Mood: clear, calm, no pressure.
```

### I-04 · imagens-ia/ia-card-oficina.png

```text
Follow the VISUAL CONSISTENCY BLOCK (photo).
Output: landscape 3:2, 1536 × 1024 px. File name: ia-card-oficina.png
Scene: a fictional mechanic (graphite work uniform without logos, dark grey nitrile gloves) working under the open bonnet of a silver car in a clean, organised workshop: white walls, light grey epoxy floor, a neat tool trolley, daylight from a wide open door.
Composition: mechanic and car fill the RIGHT 55% of the frame; the LEFT 45% is a calm, bright, almost empty area (light wall, out of focus) for text. Will be cropped to about 1.9:1: keep the head away from the top edge.
Mood: expert, tidy, trustworthy.
```

### I-05 · imagens-ia/ia-oficina-alinhamento.png

```text
Follow the VISUAL CONSISTENCY BLOCK (photo).
Output: portrait 2:3, 1024 × 1536 px. File name: ia-oficina-alinhamento.png
Scene: 3D wheel alignment in a clean workshop. A generic silver car on a scissor lift at low height, with reflective alignment target plates clamped on the wheels and the camera beam of the alignment machine in front (any screen is blank). A mechanic's gloved hands adjusting a target clamp.
Composition: vertical; main subject in the upper 70% of the frame. The bottom 25% is calm and darker (floor in shadow), because a white title will be overlaid on a dark gradient. Displayed at 3:4: keep a small margin at the top and bottom.
Mood: precise, modern.
```

### I-06 · imagens-ia/ia-oficina-freios.png

```text
Follow the VISUAL CONSISTENCY BLOCK (photo).
Output: portrait 2:3, 1024 × 1536 px. File name: ia-oficina-freios.png
Scene: close-up of a brake service. The wheel is removed; a clean brake disc and caliper on the hub; a mechanic's gloved hands inspecting the brake pad with a small tool. Workshop softly blurred behind.
Composition: vertical; subject in the upper 70%; the bottom 25% calm and darker for a white title on a dark gradient. Displayed at 3:4.
Mood: safety, care.
```

### I-07 · imagens-ia/ia-oficina-oleo.png

```text
Follow the VISUAL CONSISTENCY BLOCK (photo).
Output: portrait 2:3, 1024 × 1536 px. File name: ia-oficina-oleo.png
Scene: an oil change. A mechanic's gloved hand pours golden engine oil from a plain, unlabelled grey bottle through a clean funnel into the engine of a car with the bonnet open; tidy engine bay.
Composition: vertical; subject in the upper 70%; the bottom 25% calm and darker for a white title on a dark gradient. Displayed at 3:4.
Mood: routine done right.
```

### I-08 · imagens-ia/ia-oficina-pneus.png

```text
Follow the VISUAL CONSISTENCY BLOCK (photo).
Output: portrait 2:3, 1024 × 1536 px. File name: ia-oficina-pneus.png
Scene: tyre service. A tyre on an alloy wheel mounted on a wheel balancing machine (display blank); a mechanic's gloved hands place a balancing weight on the rim; stacked tyres softly blurred behind.
Composition: vertical; subject in the upper 70%; the bottom 25% calm and darker for a white title on a dark gradient. Displayed at 3:4.
Mood: precise, practical.
```

### I-09 · imagens-ia/ia-assinatura-contrato.png

```text
Follow the VISUAL CONSISTENCY BLOCK (photo).
Output: landscape 3:2, 1536 × 1024 px. File name: ia-assinatura-contrato.png
Scene: close-up of the moment the deal is signed. A customer's hand signs a document with a deep red (#B2251D) pen on a light desk; the paper shows only grey unreadable lines, no letters. A car key with a plain grey tag rests next to the paper; the consultant's hand, in a graphite sleeve, points gently to the signature area. Background: a bright showroom with a silver car, strongly blurred.
Composition: hands and paper in the centre-right; the left third calm. May be cropped to 16:9: keep important content away from the top and bottom 10%.
Mood: achievement, trust.
```

### I-10 · imagens-ia/ia-documentos-chaves.png

```text
Follow the VISUAL CONSISTENCY BLOCK (photo).
Output: landscape 3:2, 1536 × 1024 px. File name: ia-documentos-chaves.png
Scene: top-down flat lay on a light concrete surface: a closed grey document folder, a few loose sheets with grey unreadable lines, two car keys (one with a plain deep red #B2251D tag) and a pen. No ID cards, no readable text, no logos.
Composition: objects grouped centre-right; the left 35% empty concrete.
Mood: organised, simple.
```

### I-11 · imagens-ia/ia-detalhe-placa.png

```text
Follow the VISUAL CONSISTENCY BLOCK (photo).
Output: landscape 3:2, 1536 × 1024 px. File name: ia-detalhe-placa.png
Scene: close-up of the rear of a clean silver car at eye level: tail light, part of the bumper and the licence plate area, which is completely out of focus and unreadable (no characters, no band text, no flag). Soft daylight.
Composition: tail light and plate area on the right half; the left half is the softly blurred car body and background.
Mood: attention to detail, paperwork in order.
```

### I-12 · imagens-ia/ia-atendimento-loja.png

```text
Follow the VISUAL CONSISTENCY BLOCK (photo).
Output: landscape 3:2, 1536 × 1024 px. File name: ia-atendimento-loja.png
Scene: customer service on the lot. A fictional salesperson (white shirt, graphite trousers) opens the driver's door of a generic white sedan for a fictional couple in their thirties, who look inside and smile naturally. Under a white canopy, other cars blurred behind.
Composition: people and car within the central 60%; some free space above for cropping; nobody looks at the camera.
Mood: welcoming, unhurried.
```

### I-13 · imagens-ia/ia-patio-loja.png

```text
Follow the VISUAL CONSISTENCY BLOCK (photo).
Output: landscape 3:2, 1536 × 1024 px. File name: ia-patio-loja.png
Scene: a covered car lot with no people: a large white tensile canopy, smooth concrete floor, six clean generic cars parked in a neat row (silver, grey, white, black), soft morning light, a few green plants at the edges. No signs, banners, text or storefront: it must look like a generic lot, not a real address.
Composition: one-point perspective along the row of cars; the upper third is canopy. Will be cropped to 16:9.
Mood: organised, open, inviting.
```

### I-14 · imagens-ia/ia-ilustra-troca.png

```text
Follow the VISUAL CONSISTENCY BLOCK (illustration).
Output: square 1:1, 1024 × 1024 px. File name: ia-ilustra-troca.png
Subject: two simple side-view car silhouettes facing each other, the left one graphite #1D1E22 and the right one silver #BFBEC0, with a circular pair of arrows in deep red #B2251D between them, suggesting a trade-in. A small light-grey ground shadow under each car. Plain white background, no text.
Composition: centred, objects within the central 60%. It will be shown small (about 120 px), so shapes must stay readable at that size.
```

### I-15 · imagens-ia/ia-ilustra-localizacao.png

```text
Follow the VISUAL CONSISTENCY BLOCK (illustration).
Output: landscape 3:2, 1536 × 1024 px. File name: ia-ilustra-localizacao.png
Subject: a simplified top-down street map in light grey #EBEBED and white (blocks and streets only, no names, no labels, no water). On the same avenue, two map pins side by side: a deep red #B2251D pin above a small simple building (the car store) and a graphite #1D1E22 pin above a second small building next door (the workshop). Plain white background, no text.
Composition: pins slightly right of centre; the left 40% calm, because a title may sit beside it.
```

### I-16 · imagens-ia/ia-ilustra-404.png

```text
Follow the VISUAL CONSISTENCY BLOCK (illustration).
Output: square 1:1, 1024 × 1024 px. File name: ia-ilustra-404.png
Subject: a small graphite #1D1E22 car at the end of a dotted road that splits into two paths, next to a blank signpost (no text) with a small deep red #B2251D flag. Plain white background, calm and slightly playful.
Composition: centred within the middle 60%.
```
