import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => { //Chama o método create
      //de dentro do productService e manda como parâmetro um produto. Espera a
      //confirmação (observable) de que o produto foi criado.
      this.productService.showMessage('Operação executada com sucesso!')//Mostra msg
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {// Método que cancela e volta à página de produtos
    this.router.navigate(['/products'])
  }
}
