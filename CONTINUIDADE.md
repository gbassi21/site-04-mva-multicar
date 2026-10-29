# MVA Multicar: continuidade

Atualizado em 29/10/2026.

## Estado atual

**Amostra v0 construída, aguardando aprovação do Paulo.** Nada além da amostra foi construído.

- Rodar: `npm run dev` → http://localhost:8080 (página do veículo: `/estoque/ford-ranger-limited-2018/`, `/estoque/renault-duster-dynamique-2016/`, `/estoque/vw-saveiro-2014/`).
- Pronto: faixa de demonstração, cabeçalho (menu de celular), hero com busca e pílulas, 3 cards de serviço, vitrine "Carros à venda" com Ranger, Duster e Saveiro e o efeito do carro chegando, topo da página do veículo (galeria de 13 imagens, painel com preço e WhatsApp, ficha técnica, barra fixa no celular) e rodapé.
- Conferido em 390 e 1440 px, sem erros no console, sem rolagem horizontal, `noindex` em todas as páginas.
- Documentos: `AGENTS.md`, `specs/site.md`, `specs/design.md`, `imagens.md` (inventário e prompts), `memoria.md`.
- Dados: os 10 veículos do catálogo têm arquivo em `src/veiculos/`; só os 3 com imagens padronizadas aparecem.

## Próximo passo

1. Paulo aprova ou ajusta a amostra (identidade, logo, hero, cards, efeito, filtros do estoque).
2. Paulo gera as imagens ilustrativas I-01 a I-04 (as da amostra) e, depois, I-05 a I-16, salvando em `imagens-ia/`.
3. Com a aprovação, construir o resto do site na ordem de `specs/site.md` §3: estoque com filtros, demais seções da home, vender ou trocar, financiamento, oficina, sobre, contato, privacidade, 404.

## Alertas

- **Estoque:** vitrine única, sem abas, grupos ou rótulos por faixa de valor; não criar campo de grupo nos dados. Selo "Destaque" é opcional e não depende do preço.
- **Filtros:** a regra de 29/10 (preço, carroceria, marca) substituiu a lista anterior (com ano, km, câmbio e combustível). Confirmar com o Paulo antes de construir o estoque.
- **Referências ausentes:** `ref-estrutura-kavak.md` e `solucoes-secoes-mva.md` nunca chegaram; a estrutura foi tirada do print. Se aparecerem, comparar com `specs/design.md` §1 e `specs/site.md` §3 e avisar o Paulo das diferenças antes de mudar.
- **Pedido do cliente:** em 29/10 o arquivo continuava com os 22 carros da Mobiauto (data de 28/10). O catálogo do site são os 10 com pasta em `imagens-geradas/` (assumido).
- **7 pastas de veículos fora do padrão:** nomes do ChatGPT ou só `.zip` (A3, Prisma, Fastback, HB20, Hilux, Corolla Cross, Polo). Para entrar no site, cada uma precisa de `01-capa.png` … `13-destaque.png`. Ao padronizar, conferir: na pasta do Fastback Impetus há "Emblema Abarth em destaque na traseira branca" (Abarth é outra versão; carro branco × prata/cinza nas demais) e arquivos com cores diferentes ("Cinza", "Prata"); HB20 e Hilux têm imagens descritas com placa "MVA".
- **Links da amostra:** estoque, vender ou trocar, financiamento, oficina, sobre, contato e privacidade ainda não existem; os links apontam para os caminhos finais e dão "não encontrado" por enquanto.
- **Imagens:** primeira build processa todas as imagens (cerca de 40 s para 3 carros); as seguintes reaproveitam `_site/img/`. Não apagar `_site/img/` sem necessidade.
- **Git:** `carros_originais/` e arquivos fora do padrão em `imagens-geradas/` ficam fora do Git (`.gitignore`).
