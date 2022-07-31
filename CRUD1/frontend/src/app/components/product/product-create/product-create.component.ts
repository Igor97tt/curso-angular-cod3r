//COMPONENTE DE CRIAÇÃO DE PRODUTO


import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Product } from '../product.model';



@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})



export class ProductCreateComponent implements OnInit {

  product: Product = { //Cria um produto padrão
    name: '',
    price: null
  }

  constructor(private productService: ProductService, 
      private router: Router/*A propriedade productSerivce é do tipo ProductService*/ 
  ) { } /*Importa/injeta como dependencia o service pra dentro do construtor do componente de criação do 
  produto*/

  ngOnInit(): void { //Função que torna possível acessar os métodos dentro do serviço
    
  }


  createProduct(): void{
    this.productService.create(this.product).subscribe(()=>{ //Chama o método create de dentro do service e 
      //manda como parâmetro um produto criado vazio
      this.productService.showMessage('Produto criado') /*Chama o método de mostrar mensagem que fica dentro 
      do service e manda uma string como parâmetro*/
      this.router.navigate(['/products']) //Navegação
    })
  }


  cancel(): void{
    this.router.navigate(['/products']) /*Chama o método de mostrar mensagem e manda uma 
    string como parâmetro*/ //2
  }

}
