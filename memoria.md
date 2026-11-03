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
