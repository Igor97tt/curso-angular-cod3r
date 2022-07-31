import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read', //Seletora que será usada como tag HTML para puxar o HTML do componente;
  templateUrl: './product-read.component.html',//Localização do template criado;
  styleUrls: ['./product-read.component.css']//Localização da folha de estilo do componente
})
export class ProductReadComponent implements OnInit { //Exportação da classe ProductReadComponent

  products: Product[] //cria uma array de produtos do tipo produto (classe que vai criar os produtos na tabela)
  displayedColumns = ['id', 'name', 'price', 'action']; //Cria um array de títulos que vão acima das colunas que 
  // aparecem na tabela


  constructor(private productService: ProductService) { } //Injeta a dependencia do serviço produto
  //É neste serviço que existe o método de criar um produto e adicionar ele ao banco de dados / backend da aplicação

  ngOnInit(): void { // Método onde é possível acessar o conteúdo de dentro do service
    this.productService.read().subscribe(products => { // Cria um subscribe
      this.products = products // Atribui para nossa array de produtos, uma array de produtos recebida no parametro
      console.log(products) // Console dos produtos
    })
  }
}
