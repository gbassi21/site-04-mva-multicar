# MVA Multicar: continuidade

Atualizado em 29/10/2026.

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

## Publicação (03/11/2026)

- Repositório público: https://github.com/paulobreder/site-04-mva-multicar
- Site no ar: https://paulobreder.github.io/site-04-mva-multicar/ (atualizar com `npm run publicar`, depois de commitar).

## Estado em 03/11/2026 (nada commitado desde a Amostra v1)

- **Site completo construído:** início, estoque, 3 páginas de veículo (com "Outros carros"), vender ou trocar, financiamento, oficina, sobre, contato, privacidade e 404. Conferido em 390 e 1440 px, sem rolagem horizontal e sem erros no console.
- **Próximo passo:** Paulo revisa o site completo e autoriza o commit; decide sobre "Clássicos e raridades" e "Compre seguro"; gera as imagens ilustrativas; padroniza as 7 pastas de veículos. Na entrega: painel de edição (Decap ou Sveltia).
