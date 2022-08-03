import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  showOnConsole(msg: string): void{
    console.log(msg)
  }

  constructor() { }
}
