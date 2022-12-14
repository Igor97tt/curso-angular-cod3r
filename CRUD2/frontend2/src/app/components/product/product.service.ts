import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { } //construtor

  showMessage(msg: string): void{ //método para exibir mensagem
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product>{//Método que retorna um observable 
    //(confirmação) de produto para quem chamou. Recebe como parâmetro um produto.
    return this.http.post<Product>(this.baseUrl, product) //Tem como retorno a 
    //inserção do produto recebido via parametro no backend, desta forma criando 
    //o produto.
  }

  read(): Observable<Product[]>{ //Método que retorna um observable (confirmação)
    //de array de produtos pra quem chamou
    return this.http.get<Product[]>(this.baseUrl) //Tem como retorno uma array de
    //produtos que foi encontrada através de uma busca com o método "get" dentro da
    //base de dados. Manda como parâmetro a url base.
  }

  readById(id: string): Observable<Product>{
    const url =`${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }

  update(product: Product): Observable<Product>{
    const url =`${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }

  delete(id: string): Observable<Product>{
    const url =`${this.baseUrl}/${id}`
    return this.http.delete<Product>(url)
  }
}
