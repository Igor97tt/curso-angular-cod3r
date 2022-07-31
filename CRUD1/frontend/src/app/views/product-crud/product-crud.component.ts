import { HeaderService } from './../../components/template/header/header.service';
//CRIAÇÃO DO COMPONENT DE CADASTRO DE PRODUTO

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //Importa a classe responsável pelo serviço de rotas

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
   } //Injeta a dependência de rotas

  ngOnInit(): void {
    
  }

  navigateToProductCreate(): void{ //Método que define a rota e joga para dentro do atributo router
    console.log('Navegando...') //Quando o método é chamado na outra tela, ele faz a rota
    this.router.navigate(['/products/create'])
  }

}
