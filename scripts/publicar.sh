#!/bin/sh
# Monta o site para https://<usuário>.github.io/<repositório>/ e envia para o branch gh-pages.
set -e
ORIGEM=$(git remote get-url origin)
REPO=$(basename "$ORIGEM" .git)
SAIDA=.publicar
rm -rf "$SAIDA"
npx @11ty/eleventy --pathprefix="/$REPO/" --output="$SAIDA"
touch "$SAIDA/.nojekyll"
cd "$SAIDA"
git init -q -b gh-pages
git add -A
git commit -q -m "Publicação $(date '+%d/%m/%Y %H:%M')"
git push -q -f "$ORIGEM" gh-pages
echo "Publicado. Em 1 a 2 minutos o site atualiza no GitHub Pages."
