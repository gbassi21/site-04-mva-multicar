# MVA Multicar: regras do projeto

Rebranding de demonstração, não oficial, em pt-BR, para a MVA Multicar (seminovos e usados, Jacaraípe, Serra/ES) e a oficina vizinha MVA Centro Automotivo. Ao retomar, leia `CONTINUIDADE.md` primeiro.

## Invariantes

- **Se um pedido contradisser uma decisão registrada em `memoria.md` ou nos specs, pare e avise o Paulo antes de alterar.**
- "Projeto de demonstração" em todas as páginas; `noindex` (meta, `robots.txt`, cabeçalho). Nunca citar agência, criador ou marca terceira no site (rodapé, créditos, meta tags, comentários de código).
- Stack fixa: Eleventy 3 + @11ty/eleventy-img, HTML, CSS e JavaScript puro mínimo. Sem frameworks nem bibliotecas de CSS, JS ou animação. Não instalar dependências sem autorização.
- Dados só de `referencias/pedido-do-cliente.md`. Nada inventado: o que falta aparece "a confirmar" ou como EXEMPLO marcado. Sem depoimentos, taxas, garantias, prazos ou números inventados. Avaliações: a nota real do Google (loja 4,2 com 5; oficina 4,0 com 127), com link, sempre visível; comentários só os reais, de 5 estrelas: ao vivo do Google Maps pela API oficial, ou depoimentos com autorização do autor registrados em `referencias/pedido-do-cliente.md` (texto exato, sem correção; `specs/design.md` §6).
- WhatsApp da loja (27) 99780-7040 em venda, compra e troca; da oficina (27) 99916-1157 só nos serviços da oficina. Glifo oficial do WhatsApp em todos os botões e botão flutuante em todas as páginas.
- Identidade (v1): preto e vermelho dominam; uma única cor de ação, o vermelho #D7191F (#B2251D no hover); conteúdo até 1360 px; ícones de traço e glifos em SVG local (`lib/icones/`), licenças em `licencas/`.
- Estoque: vitrine única, carros misturados, sem abas, grupos ou rótulos por faixa de valor; filtros por preço, carroceria, marca, ano e câmbio (km e combustível fora); ordem padrão ano mais novo primeiro; selo "Destaque" opcional, sem relação com preço.
- Imagens de veículos: só de `imagens-geradas/`, nunca geradas nem alteradas, na vitrine, na página do veículo e, até `imagens-ia/ia-hero-entrega.png` existir, no hero. Imagens ilustrativas: geradas pelo Paulo, salvas em `imagens-ia/`. Toda imagem leva "Imagem ilustrativa"; sem imagem ilustrativa, bloco de marca no tamanho final (nome do arquivo só em comentário do HTML). Não abrir as imagens uma a uma; conferir no site renderizado.
- Movimento moderado, respeitando `prefers-reduced-motion`; nunca esconder preço, ano, km, fotos ou WhatsApp; não atrasar a primeira tela.

## Comandos

- `npm run dev`: servidor local em http://localhost:8080 (o primeiro build processa as imagens e demora).
- `npm run build`: gera `_site/`.
- `npm run publicar`: monta o site e envia para o branch `gh-pages`; ele fica em https://paulobreder.github.io/site-04-mva-multicar/ (público, `noindex`). Só com autorização do Paulo.

## Onde consultar, por tarefa

| Tarefa | Ler |
|---|---|
| Conteúdo, página, seção, CTA, mensagem de WhatsApp | `specs/site.md` (seção da página) + `referencias/pedido-do-cliente.md` |
| Cores, fonte, espaçamento, componente, movimento, celular/computador | `specs/design.md` |
| Imagem ilustrativa ou de veículo | `imagens.md` |
| Por que algo é assim; dado assumido; pendência | `memoria.md` |
| Estado atual e próximo passo | `CONTINUIDADE.md` |
| Código | `eleventy.config.js`, `src/_data/`, `src/_includes/`, `src/assets/css/site.css`, `src/assets/js/site.js` |

## Incluir um veículo

1. Pasta `imagens-geradas/<marca-modelo-versao-ano>/` com as imagens `01-capa.png` … `13-destaque.png` (nomes de dois dígitos; `01-capa` é obrigatória).
2. Copie um arquivo de `src/veiculos/` para `src/veiculos/<mesmo-nome-da-pasta>.md` e preencha só com dados confirmados (modelo em `specs/site.md` §5.3). Campo sem dado fica vazio e aparece "a confirmar"; dedução técnica vai em `assumidos`.
3. `npm run dev`: o carro entra na vitrine e ganha a página `/estoque/<pasta>/`. Sem `01-capa.png`, o build avisa e o carro fica fora.
4. Atualize a tabela §3.2 de `imagens.md`.

## Incluir uma imagem ilustrativa

1. Pegue o nome e o prompt em `imagens.md` §2 e §5.
2. Salve o PNG em `imagens-ia/<nome>.png`.
3. `npm run dev`: o bloco de marca vira a imagem, com a etiqueta (no hero, a imagem substitui a capa da Ranger). Ajuste o ponto de foco em `src/_data/ilustracoes.js` se o recorte cortar o assunto.
4. Mude o status em `imagens.md`.

## Como trabalhar

- Leia só o pertinente à tarefa; não abra `node_modules/`, `_site/`, ZIPs nem todas as imagens.
- Teste o que mudou em 390 e 1440 px e confira o console. Diga o que não conseguiu verificar.
- Registre decisão nova em `memoria.md` (data, motivo, decisão substituída) e atualize `CONTINUIDADE.md`.
- Commit, publicação ou reversão só com autorização do Paulo.
