/*Arquivo que define o typescrip global do projeto e dá início à ele*/

import { enableProdMode } from '@angular/core'; /*Importação de função do projeto*/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; /*Importação
de função do projeto*/

import { AppModule } from './app/app.module'; /*Importa o módulo principal do projeto*/

import { environment } from './environments/environment'; /*Importa o ambiente principal
do porjeto*/

if (environment.production) { /*Condição padrão*/
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule) /*Carrega o módulo principal
ao bootstrap*/
  .catch(err => console.error(err));
