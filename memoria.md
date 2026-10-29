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

## Assumidos (a revisar)

- **Catálogo = 10 veículos com pasta em `imagens-geradas/`.** O pedido lista 22 carros da Mobiauto; o prompt fala em "catálogo dos 10 carros". Os outros 12 (inclusive os clássicos) ficam fora até terem imagens.
- **Ordem padrão:** sem data de entrada no estoque, "mais recente" = ano-modelo mais novo primeiro (empate: maior preço), até a loja preencher `ordem`.
- **Carroceria** pelo modelo (Ranger, Saveiro e Hilux picapes; Duster, Fastback e Corolla Cross SUV; HB20 e Polo hatch; Prisma e A3 sedã). Audi A3 como sedã pelo nome da pasta (o pedido diz só "A3 1.4 Prestige").
- **Deduções técnicas inequívocas** (campo `assumidos` em cada arquivo): Ranger 3.2 e Hilux 2.8 diesel; Saveiro 1.6 2014, Duster 1.6 2016, HB20 1.0, Prisma 1.4, Polo TSI, Fastback Impetus e Corolla Cross XRE 2.0 flex; Fastback Impetus e Corolla Cross XRE automáticos (versões vendidas só com CVT).
- **Horário da loja:** "8h às 18h" (dias e sábado a confirmar).
- **Link das notas do Google:** busca no Google Maps pelo nome e endereço, até termos o link exato das fichas.
- **Freios e troca de óleo** como parte de "mecânica geral" da oficina (imagens I-06 e I-07).

## Pendências: confirmar com os donos

- CNPJ e ano de início da loja de veículos ("desde 2017" só como grupo).
- Dias de funcionamento e horário de sábado da loja; horário da oficina.
- Se há garantia e laudo cautelar; financeiras parceiras; documentos pedidos na avaliação.
- Se os carros vendidos passam por revisão na oficina do grupo antes da entrega.
- Se a loja faz repasse para lojistas.
- Quem atualiza o estoque; data de entrada de cada carro (para a ordem "mais recente").
- Cor, câmbio (quando não está na versão), cabine da Saveiro e opcionais de cada veículo.
- Se a oficina faz freios e troca de óleo (dentro de "mecânica geral").
- Link exato das fichas do Google da loja e da oficina.
- Logo em alta resolução; domínio e e-mail.
- Se a bio "novos e semi novos" deve mudar para "seminovos e usados".
