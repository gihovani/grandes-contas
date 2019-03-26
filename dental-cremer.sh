#!/usr/bin/env bash

echo "Gerando build para a aplicacao da Dental Cremer na pasta dist/"
rm src/assets/icons/*.png
cp src/assets/icons/dental-cremer/*.png src/assets/icons/

rm src/favicon.ico
cp src/dental-cremer.ico src/favicon.ico

rm src/environments/environment.prod.ts
cp src/environments/dental-cremer.ts src/environments/environment.prod.ts

ng build --prod --base-href "/dental-cremer/grandes-contas/"
