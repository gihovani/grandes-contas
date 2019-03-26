#!/usr/bin/env bash

echo "Gerando build para a aplicacao da Dental Speed na pasta dist/"
rm src/assets/icons/*.png
cp src/assets/icons/dental-speed/*.png src/assets/icons/

rm src/favicon.ico
cp src/dental-speed.ico src/favicon.ico

rm src/environments/environment.prod.ts
cp src/environments/dental-speed.ts src/environments/environment.prod.ts

ng build --prod --base-href "/grandes-contas/"
