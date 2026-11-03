# MVA Multicar: especificação do site

Rebranding de demonstração, não oficial, em pt-BR. Fonte de verdade dos dados: `referencias/pedido-do-cliente.md`. Decisões e datas: `memoria.md`. Identidade e medidas: `specs/design.md`. Imagens: `imagens.md`.

## 1. Objetivo

Dar à MVA Multicar (seminovos e usados multimarcas, Jacaraípe, Serra/ES) uma casa própria para o estoque. Hoje o Google leva ao Instagram e o estoque vive num portal de terceiros. O site precisa:

1. mostrar o estoque de forma fácil de navegar, com uma página por veículo;
2. passar confiança com dados reais (endereço, nota do Google, oficina do grupo ao lado);
3. converter contatos pelo WhatsApp, com mensagem pronta;
4. usar a reputação da oficina MVA Centro Automotivo (nota 4,0 com 127 avaliações) como diferencial de pós-venda.

Regras permanentes: "Projeto de demonstração" em todas as páginas; `noindex` (meta, `robots.txt` e cabeçalho); nenhuma citação de agência, criador ou marca terceira em rodapé, créditos, meta tags ou comentários de código.

## 2. Públicos

| Público | O que procura | Onde resolve |
|---|---|---|
| Comprador | Ver carros, preço, ano, km, fotos; falar rápido com a loja | Início, estoque, página do veículo, financiamento |
| Quem quer vender ou trocar | Saber se a loja compra/aceita troca e como é a avaliação | Vender ou trocar, card da home |
| Cliente da oficina | Serviços, endereço, WhatsApp da oficina, nota | Oficina, card "Cuide do seu carro" |
| Lojistas do repasse | Contato direto para negócios entre lojas | Bloco curto em Contato (existência do repasse **a confirmar**) |

## 3. Páginas e seções, na ordem

Todas as páginas: faixa "Projeto de demonstração" no topo, cabeçalho com 4 links (Estoque, Vender ou trocar, Oficina, Contato) e WhatsApp, botão flutuante de WhatsApp (número da loja; na oficina, o da oficina), conteúdo, rodapé com a nota "Imagens ilustrativas de demonstração; fotos reais no site final", "Valores de 28/out/2026, sujeitos a alteração" e "Projeto de demonstração. Não é o site oficial da MVA Multicar.".

### 3.1 Início `/` (construída na Amostra v1)

1. **Hero** preto: título curto, subtítulo, busca por marca ou modelo (envia `?q=` para `/estoque/`), pílulas Comprar (`/estoque/`), Vender (`/vender-ou-trocar/`), Trocar (`/vender-ou-trocar/#troca`); à direita, a imagem do hero (`ia-hero-entrega.png`) ou, até ela existir, a capa de estúdio do carro de `carroHero` com etiqueta de nome, preço e link.
2. **Três cards de serviço**: "Quanto vale o seu carro?" (`/vender-ou-trocar/`), "Financiamento" (via banco, `/financiamento/`), "Cuide do seu carro" (oficina, `/oficina/`).
3. **Faixa de confiança** (só fatos): oficina própria ao lado, desde 2017; troca e financiamento via banco; atendimento pelo WhatsApp.
4. **Carros à venda** (`#carros`): vitrine única com os filtros de §3.2 (estado na URL também na home), ordem padrão, efeito do carro chegando, selo "Destaque" opcional, card final "Ver todo o estoque".
5. **Explore por tipo**: Hatch, Sedã, SUV, Picape, com silhueta e quantidade; filtram a vitrine da home (no site completo, levam ao estoque filtrado).
6. **Cuide do seu carro** (faixa preta, `#oficina`): MVA Centro Automotivo, endereço, horário (seg a sex, 8h às 18h), nota 4,0 com 127 avaliações e link, 8 serviços reais com ícone (cada um abre o WhatsApp da oficina com o serviço na mensagem), botão de WhatsApp e Instagram da oficina.
7. **Como funciona** em 3 passos: escolha no site; financie ou dê seu carro na troca; retire com o laço vermelho.
8. **Avaliações no Google**: loja 4,2 (5 avaliações) e oficina 4,0 (127), com link. Nenhum depoimento.
9. **Faixa CTA vermelha**: "Quer vender ou trocar o seu carro?" → WhatsApp da loja com a mensagem de avaliação.
10. **Rodapé preto completo**: logo, texto curto, Instagram e WhatsApp, as duas unidades (endereço, horário, WhatsApp, Instagram), links do site, "Projeto de demonstração", nota das imagens e data dos valores.

Para o site completo, sugeridas em `referencias/solucoes-secoes-mva.md`: "Clássicos e raridades" (dois Fuscas 1995 e o Passat GTS 1987, com bloco "fotos em breve" até haver imagens), "Compre seguro na MVA" (4 cuidados contra golpes) e "Para lojistas: carros no repasse".

### 3.2 Estoque `/estoque/`

Título com a contagem, filtros, ordenação, grade de cards e estado vazio ("Não achou? Conte o que procura no WhatsApp").

- Filtros: **preço até** (degraus gerados a partir do campo `preco`), **carroceria** (Hatch, Sedã, SUV, Picape), **marca**, **ano a partir de** e **câmbio** (opções só com o que existe nos dados). Km e combustível ficam fora (decisão de 29/10/2026). Busca livre `q` (marca ou modelo) vinda do hero.
- Estado na URL: `?q=&carroceria=&marca=&ano=&cambio=&preco_max=&ordem=`. Recarregar ou compartilhar o link mantém o filtro.
- Ordenação: padrão (§5.2), menor preço, maior preço, mais novo, menor km.
- Sem JavaScript, a página mostra todos os carros na ordem padrão.

### 3.3 Página do veículo `/estoque/<pasta>/`

1. Trilha: Início › Estoque › Marca Modelo Ano.
2. **Galeria** com as imagens na ordem dos números (01 a 13), contador, setas, miniaturas no computador, deslizar no celular; etiqueta "Imagem ilustrativa".
3. **Painel**: marca e modelo, versão, chips (ano, km, câmbio, combustível), preço, "Valor de 28/out/2026, sujeito a alteração", selo "Destaque" se marcado, CTAs: WhatsApp (interesse), "Simular financiamento" (WhatsApp), "Tenho um carro para troca" (WhatsApp); nota da oficina ao lado e nota do Google da loja com link.
4. **Ficha técnica**: ano, km, câmbio, combustível, motor, carroceria, tração e cabine (quando houver), cor. Campo sem dado aparece "a confirmar".
5. Descrição (corpo do arquivo, opcional).
6. Parecidos (até 3, mesma carroceria e preço próximo).
7. Celular: barra fixa inferior com preço e WhatsApp.

### 3.4 Vender ou trocar `/vender-ou-trocar/`

Imagem do topo, como funciona (3 passos), âncora `#troca`, formulário curto (marca, modelo, ano, km, vender ou trocar) que monta a mensagem e abre o WhatsApp da loja. Documentos necessários: **a confirmar**.

### 3.5 Financiamento `/financiamento/`

Como funciona (escolha o carro; envie seus dados pelo WhatsApp; análise com as financeiras parceiras, **a confirmar**; assinatura e retirada), formulário que abre o WhatsApp da loja. Sem simulador de parcelas, sem taxas, sem prazos.

### 3.6 Oficina `/oficina/` (MVA Centro Automotivo)

Página curta: serviços do pedido (mecânica geral, alinhamento 3D e balanceamento, pneus), nota 4,0 com 127 avaliações e link, endereço (Av. Abido Saad, 2553), WhatsApp **da oficina**, Instagram @mvacentroautomotivo. Só aqui e nos cards de serviço da oficina se usa o WhatsApp (27) 99916-1157.

### 3.7 Sobre `/sobre/`

As duas frentes do grupo MVA, lado a lado em Jacaraípe; o que a loja faz (compra, venda, troca, financiamento, conforme a bio); Instagram das duas. "Desde 2017" só como grupo e só depois de confirmado.

### 3.8 Contato e localização `/contato/`

As duas unidades: endereço, CEP, WhatsApp, horário (loja: 8h às 18h; dias e sábado **a confirmar**; oficina **a confirmar**), link do mapa, Instagram. Bloco "Lojistas e repasse" (**a confirmar**).

### 3.9 Privacidade `/privacidade/` (LGPD)

O site não guarda dados em servidor: formulários só montam a mensagem do WhatsApp; "Vistos recentemente" fica no navegador e pode ser apagado; controlador e CNPJ da loja **a confirmar**.

### 3.10 404

Mensagem curta, busca e links para estoque e WhatsApp.

## 4. CTAs e mensagens prontas de WhatsApp

Loja (27) 99780-7040 → `https://wa.me/5527997807040?text=...` em tudo de venda, compra e troca. Oficina (27) 99916-1157 → `https://wa.me/5527999161157?text=...` só nos serviços da oficina. Uma única cor de ação (vermelho).

| Onde | Número | Mensagem |
|---|---|---|
| Cabeçalho, rodapé, geral | Loja | Olá! Vim pelo site da MVA Multicar e quero mais informações. |
| Card ou página do veículo | Loja | Olá! Tenho interesse no {marca} {modelo} {versão} {ano}, anunciado por {preço} no site da MVA Multicar. Ainda está disponível? |
| Financiar o veículo | Loja | Olá! Quero simular o financiamento do {marca} {modelo} {versão} {ano} ({preço}). |
| Troca no veículo | Loja | Olá! Quero dar meu carro na troca pelo {marca} {modelo} {versão} {ano}. Meu carro é: |
| Vender ou trocar (geral) | Loja | Olá! Quero avaliar meu carro para venda ou troca na MVA Multicar. Modelo, ano e km: |
| Financiamento (geral) | Loja | Olá! Quero saber como funciona o financiamento na MVA Multicar. |
| Estoque vazio | Loja | Olá! Não achei no site o carro que procuro. Procuro: |
| Oficina | Oficina | Olá! Vim pelo site e quero agendar um serviço na MVA Centro Automotivo. Serviço: |

## 5. Estoque e arquivo de dados do veículo

### 5.1 Inclusão

Cada veículo é um arquivo `src/veiculos/<pasta>.md` com o mesmo nome da pasta `imagens-geradas/<pasta>/`. Ele vira a página `/estoque/<pasta>/` automaticamente. Sem `imagens-geradas/<pasta>/01-capa.png`, o veículo fica fora do site e o build avisa. Imagens usadas: arquivos `NN-nome.png` (dois dígitos), em ordem numérica.

### 5.2 Regras da vitrine

- Vitrine única com os carros misturados, sem abas, grupos ou rótulos por faixa de valor.
- Ordem padrão: o campo opcional `ordem` (definido pela loja, menor primeiro); sem ele, ano mais novo primeiro e, no empate, maior preço.
- "Destaque" é um selo opcional (`destaque: true`), escolhido pela loja, sem relação com o preço.

### 5.3 Modelo

```yaml
---
marca: Ford
modelo: Ranger
versao: 3.2 Limited 4x4 aut         # texto da versão como no pedido
ano: 2018                           # ano-modelo (número)
ano_fabricacao:                     # opcional; quando diferente, exibe "2024/2025"
km: 160000
preco: 135900                       # em reais, sem centavos
carroceria: picape                  # hatch | seda | suv | picape
cambio: Automático                  # vazio = "a confirmar"
combustivel: Diesel                 # vazio = "a confirmar"
motor: "3.2"
tracao: 4x4                         # opcional
cabine: Dupla                       # opcional (picapes)
cor:                                # vazio = "a confirmar"
destaque: false                     # selo opcional, sem relação com preço
ordem:                              # opcional, ordem definida pela loja
assumidos: []                       # campos deduzidos, a conferir com a loja
---
Descrição opcional em texto corrido.
```

Os campos preenchidos por dedução técnica inequívoca ficam listados em `assumidos` (ver `memoria.md`). Nada de opcionais, histórico, garantia ou laudo sem confirmação.

## 6. Funcionalidades

- Busca do hero por marca ou modelo → `/estoque/?q=`.
- Filtros e ordenação com estado na URL (§3.2), em JavaScript puro, sem recarregar.
- Galeria com rolagem nativa (funciona sem JavaScript), setas, miniaturas, teclado.
- Vistos recentemente (`localStorage`, com aviso na página de privacidade).
- Formulários que montam a mensagem e abrem o WhatsApp; nenhum dado enviado a servidor.
- Movimento moderado e assinatura do carro entrando (`specs/design.md` §8).
- Painel de edição gratuito (Decap ou Sveltia) só na entrega.

## 7. Escopo

**Construído (03/11/2026):** todas as páginas do §3: início, estoque (busca, 5 filtros, ordenação, estado na URL), página do veículo (com "Outros carros"), vender ou trocar, financiamento, oficina, sobre, contato e localização, privacidade e 404, com os veículos que já têm imagens (Ranger, Duster, Saveiro). Formulários montam a mensagem e abrem o WhatsApp (`data-form-whatsapp`); sem JavaScript, abrem o WhatsApp com a mensagem inicial.

**Fora por enquanto (aguardando decisão do Paulo):** "Clássicos e raridades" e "Compre seguro na MVA".

**Site completo (depois da aprovação):** todas as seções e páginas do §3.

**Fora do escopo:** blog, vídeos, simulador de parcelas, avaliação automática de preço, login, comparador, chat próprio, depoimentos.

## 8. O que falta

- 16 imagens ilustrativas (`imagens.md` §2) e as imagens padronizadas de 7 veículos (`imagens.md` §3; o Paulo padroniza).
- Dados a confirmar com os donos (`memoria.md`, Pendências).
- Aprovação da amostra (identidade, logo, hero, cards, efeito).

## 9. Requisitos

**Responsividade:** conferir em 390, 768, 1024 e 1440 px. Sem rolagem horizontal da página. Alvos de toque de 44 px no mínimo. Celular primeiro.

**Acessibilidade (WCAG 2.2 AA):** contrastes conferidos (`specs/design.md` §3); foco visível em tudo; link "Pular para o conteúdo"; landmarks (`header`, `nav`, `main`, `footer`); um `h1` por página; textos alternativos honestos ("imagem ilustrativa"); galeria operável por teclado; `prefers-reduced-motion` respeitado; nada essencial só na cor.

**Desempenho:** LCP abaixo de 2,5 s em 4G; CLS abaixo de 0,1; imagens AVIF e WebP com `srcset`, dimensões declaradas e `loading="lazy"` fora da primeira tela; fonte local com `preload` e `font-display: swap`; ícones em SVG embutido; CSS único; JavaScript próprio abaixo de 12 kB, carregado com `defer`; nenhuma biblioteca de CSS, JS ou animação.
