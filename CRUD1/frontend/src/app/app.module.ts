/*Módulo princpal do projeto. É a partir daqui que módulos, classes e 
componentes são chamados*/

import { NgModule, LOCALE_ID } from '@angular/core'; //Importa a interface
import { BrowserModule } from '@angular/platform-browser'; //Importa a classe do browser

import{ HttpClientModule } from '@angular/common/http'; //Importa o cliente Http / Backend

import { AppRoutingModule } from './app-routing.module'; //Importa a classe de roteamento

import { AppComponent } from './app.component'; /*Importa a classe do componente principal
criado dentro do app.component.ts*/

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; /*Importa a
classe de animações de browser*/

import { FormsModule } from '@angular/forms'; //Importa a classe de formularios do angular
import { MatFormFieldModule } from '@angular/material/form-field'; //Importa classe referente a formularios angular
import { MatInputModule } from '@angular/material/input';

import { HeaderComponent } from './components/template/header/header.component'; /*Importa a 
classe do componente de cabeçalho criado dentro do header.component.ts*/

import { MatToolbarModule } from '@angular/material/toolbar'; //Importa uma toolbar do Angular

import { FooterComponent } from './components/template/footer/footer.component'; /*Importa a 
classe do componente de rodapé criado dentro do footer.component.ts*/

import { NavComponent } from './components/template/nav/nav.component'; /*Importa a classe do 
componente de navegação criado dentro do nav.component.ts*/

import { MatSidenavModule } from '@angular/material/sidenav'; /*Importa a classe de materiais
para menu de navegação*/

import { MatCardModule } from '@angular/material/card'; /*Importa a classe de cards*/

import { MatButtonModule } from '@angular/material/button';

import { MatListModule } from '@angular/material/list'; /*Importa a classe de lista de
materiais*/

import { HomeComponent } from './views/home/home.component'; /*Importa a classe do componente
home*/

import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

import {  MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [ //declaração das classes que serão usadas como componentes
    AppComponent, //componente principal onde os outros ficam inseridos
    HeaderComponent, 
    FooterComponent, 
    NavComponent, 
    HomeComponent, 
    ProductCrudComponent, 
    RedDirective, ForDirective, ProductCreateComponent, ProductReadComponent, ProductUpdateComponent, ProductDeleteComponent /*Declara as classes de componentes de template*/
  ],
  imports: [ //lista com as classes importadas que serão usadas como módulos secundários
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent] //carregamento do componente principal no bootstrap
})
export class AppModule { } //Exporta e torna visível a classe do módulo principal
