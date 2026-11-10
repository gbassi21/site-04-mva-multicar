# MVA Multicar: continuidade

Atualizado em 10/11/2026.

## Estado em 10/11/2026 (leia primeiro)

- Todas as mudanças de 03 a 05/11 (seções abaixo) foram **commitadas e enviadas ao `main`** do GitHub em 10/11/2026, com autorização do Paulo.
- **O site no ar (GitHub Pages) ainda é o de 03/11:** falta rodar `npm run build` e `npm run publicar` numa máquina com Node (nesta, o Node está bloqueado por política de grupo). O primeiro build processa as 117 fotos novas e demora.
- Nada disso passou por um build do Eleventy: foi conferido numa cópia do `gh-pages` com o CSS/JS novos e o HTML ajustado por script. No primeiro build, conferir: `temFoto` e `botaoFavorito` (`macros.njk`), `<dialog>` de favoritos e script de tema (`base.njk`), classes do logo (`logotipo.js`), depoimentos (`index.njk`), carros de exemplo e rótulos das fotos novas (`lib/veiculos.js`).

## Estado atual

**Amostra v1 construída (foco na interface), aguardando aprovação do Paulo.**

- Rodar: `npm run dev` → http://localhost:8080. Páginas: `/` (home completa), `/estoque/ford-ranger-limited-2018/`, `/estoque/renault-duster-dynamique-2016/`, `/estoque/vw-saveiro-2014/` e a 404.
- Identidade v1: preto e vermelho dominantes (#0C0C0E, #D7191F), conteúdo até 1360 px, títulos de 36 a 64 px, traços do logo como elemento gráfico, ícones Lucide e glifos de WhatsApp e Instagram locais, WhatsApp flutuante. Detalhes em `specs/design.md`; trocas em relação à v0 em `memoria.md`.
- Home na ordem pedida: hero preto (capa da Ranger até a imagem do hero existir), 3 cards de serviço, confiança, vitrine com filtros (preço, carroceria, marca, ano, câmbio; estado na URL), explore por tipo, faixa preta da oficina, como funciona, avaliações do Google, faixa CTA vermelha, rodapé completo.
- Conferido em 390 e 1440 px: sem rolagem horizontal, filtros testados (combinações, URL, resultado vazio, "Explore por tipo"), sem falhas de recurso nas páginas; o único erro de console foi o 404 de uma página ainda não construída.
- Referências: os dois `.md` da Kavak, o print e o pedido corrigido foram copiados de `Documents/Agencia-Sites-Imobiliarias/criacao-de-sites/site-04-mva-multicar/referencias/`.

## Próximo passo

1. Paulo aprova ou ajusta a v1.
2. Paulo gera as imagens ilustrativas (prompts em `imagens.md`); prioridade: I-01 (hero), I-02 a I-04 (cards de serviço).
3. Paulo padroniza as 7 pastas de veículos (`01-capa.png` … `13-destaque.png`).
4. Com a aprovação, construir as páginas restantes na ordem de `specs/site.md` §3 (estoque, vender ou trocar, financiamento, oficina, sobre, contato, privacidade) e as seções extras sugeridas (clássicos, compre seguro, lojistas), se aprovadas.

## Alertas

- **Estoque:** vitrine única, sem abas, grupos ou rótulos por faixa de valor; nenhum campo de grupo nos dados. Selo "Destaque" opcional, sem relação com preço.
- **Hero:** usa a capa da Ranger (`carroHero` no topo de `src/index.njk`) só até `imagens-ia/ia-hero-entrega.png` existir; depois a imagem do dia a dia entra sozinha e a etiqueta de preço some.
- **"Explore por tipo"** leva a `/estoque/?carroceria=…`.
- **Pasta do Fastback:** há um arquivo "Emblema Abarth em destaque na traseira branca" (Abarth é outra versão; cor diferente das demais). Conferir ao padronizar.
- **Imagens:** a primeira build processa todas as imagens (~40 s para 3 carros); as seguintes reaproveitam `_site/img/`.
- **Git:** `carros_originais/` e arquivos fora do padrão em `imagens-geradas/` ficam fora do Git (`.gitignore`).

## Acabamento de interação (03/11/2026, não commitado)

- Do "prompt mestre": resposta no toque, cabeçalho de vidro, troca de página com esmaecimento, menu do celular animado, segunda foto no hover do card, lupa na galeria e etiquetas/contagens vivas nos filtros (`specs/design.md` §8.1, `memoria.md`).
- Favoritos: coração no card e na galeria, contador no cabeçalho e painel lateral com WhatsApp dos carros salvos (`specs/design.md` §6).
- Conferido em 1440 e 390 px sobre uma cópia do `gh-pages` com o CSS e o JS novos (o Node estava bloqueado na máquina): sem rolagem horizontal, sem erros no console. **Falta rodar `npm run build`** para conferir o `temFoto`, o `botaoFavorito` em `macros.njk`, o botão do cabeçalho e o `<dialog>` em `base.njk`.

## Revisão pelo Apple HIG (03/11/2026, não commitada)

- Modo escuro automático e contraste aumentado; botão secundário nos cards; alvos de 44 px no celular; áreas seguras (`specs/design.md` §3.1 e §8.0; `memoria.md`).
- Conferido na cópia de teste do `gh-pages`: contraste WCAG sem falhas nas 10 páginas, nos modos claro e escuro; sem rolagem horizontal em 390 px; sem erros no console. **Falta o `npm run build`** (Node bloqueado nesta máquina) para conferir `logotipo.js`, `macros.njk` e `base.njk`.

- Botão de tema sol/lua no cabeçalho (`cabecalho.njk`, script de tema em `base.njk`, ícones `sun.svg` e `moon.svg`). Conferido na cópia de teste: troca, guarda entre páginas e cabe em 360 e 390 px.

## Comentários do Google (03/11/2026, não commitados)

- Seção de avaliações da home: nota real + até 3 comentários de 5 estrelas por unidade, ao vivo do Google Maps (`src/index.njk`, `site.js`, `loja.json` → `googleMaps`). Testado com um Google simulado (filtro, escape de texto, escuro, 390 px); **com o Google de verdade, não testado: falta a chave** (`memoria.md`).

- Depoimentos autorizados: 2 da loja (Leidiane Vargas, Reinaldo Ameno) e 2 da oficina (Rodrigo G.Ramos, Luciano Walder; o da Carla souza saiu em 04/11 para igualar as colunas) fixos na seção; conferidos na cópia de teste em 1440 e 390 px, claro e escuro, sem falhas de contraste.

- Cabeçalho abaixo de 1024 px: só logo, coração, glifo do WhatsApp e ☰; tema dentro do menu (04/11). Conferido em 390, 523, 900 e 1440 px.

## Revisão de usabilidade (05/11/2026, não commitada)

- Krug ("Não me faça pensar"): Financiamento no menu, texto vazio e repetições cortados, repasse como botão secundário, cabeçalho corrigido entre 1024 e 1199 px (`memoria.md`). Conferido em 390, 1024, 1280, 1366 e 1440 px; contraste e console sem falhas. Pendentes para o Paulo: títulos "Cuide do seu carro" e "O laço vermelho", filtros na home, depoimento do Reinaldo.

## Carros de exemplo (05/11/2026, não commitados)

- 9 carros fictícios (`src/veiculos/*.md` com `exemplo: true`, fotos em `imagens-geradas/`), sem selo no card; aviso "Anúncio de exemplo" só na página do carro e na mensagem de WhatsApp. Vitrine com 12 carros (3 reais + 9 exemplos). Conferidos na cópia de teste (montada por script, sem Eleventy): filtros, busca, ordem, página do carro, 390 e 1440 px, claro e escuro. **Falta o `npm run build`**, que vai processar as 117 fotos novas (demora no primeiro build).

## Publicação (03/11/2026)

- Repositório público: https://github.com/paulobreder/site-04-mva-multicar
- Site no ar: https://paulobreder.github.io/site-04-mva-multicar/ (atualizar com `npm run publicar`, depois de commitar).

## Estado em 03/11/2026 (nada commitado desde a Amostra v1)

- **Site completo construído:** início, estoque, 3 páginas de veículo (com "Outros carros"), vender ou trocar, financiamento, oficina, sobre, contato, privacidade e 404. Conferido em 390 e 1440 px, sem rolagem horizontal e sem erros no console.
- **Próximo passo:** Paulo revisa o site completo e autoriza o commit; decide sobre "Clássicos e raridades" e "Compre seguro"; gera as imagens ilustrativas; padroniza as 7 pastas de veículos. Na entrega: painel de edição (Decap ou Sveltia).
