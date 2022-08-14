import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products =>{ //Chama o método read de dentro
      //do productService esperando receber uma array de produtos e a confirmação de
      //que os produtos foram encontrados no backend
      this.products = products //Atribui a array recebida para uma variavel local.
      console.log(products) //Mostra no console a array (lista) de produtos.
    })
  }
}