import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  constructor(private ProductService: ProductService, private router: Router) { }

  product: Product = {
    name: '',
    price: null
  }

  ngOnInit(): void {
  }

  updateProduct(): void{

  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}
