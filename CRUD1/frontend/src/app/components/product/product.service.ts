import { Product } from "./product.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { catchError, EMPTY, map, Observable } from "rxjs";
import { ThisReceiver } from "@angular/compiler";

@Injectable({
  /*Define que essa classe (service) pode ser injetada em outras classes como uma injeção de
dependencia*/
  providedIn: "root",
})
export class ProductService {
  baseUrl = "http://localhost:3001/products";

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) {} /*Injeção de dependencia do material 
  na constructor do service*/

  showMessage(msg: string, isError: boolean = false): void {
    //Método que recebe como parâmetro uma variavel do tipo string
    this.snackBar.open(msg, "X", {
      //Chama o método .open e passa novamente a msg recebida como parâmetro
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(product: Product): Observable<Product> {
    //Método para inserir/criar novo produto no backend da aplicação
    //(recebe como parâmetro do product-create um produto vazio)
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    ); //Tem como retorno a chamada de um método que seta o
    //produto no backend enviando parâmetros que foram recebidos no método create: a navegação e o produto em si
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<Product> {
    //Recebe como parâmetro um id e retorna um observable de produto
    const url = `${this.baseUrl}/${id}`; //Interpola a url base + id do produto pra dentro da constante url
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    ); //Retorna a chamada de um método que lê um produto passando como parâmetro
    //a url base + id produto (url)
  }

  update(product: Product): Observable<Product> {
    //Recebe como parâmetro um produto e retorna um obs de produto
    const url = `${this.baseUrl}/${product.id}`; //Interpola a url base + id do produto pra dentro da constante url
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    ); //Retorna a chamada de um método de alteração do produto e manda
    //como parâmetro a interpolação e o produto
  }

  delete({ id }: { id: number }): Observable<Product> {
    //Recebe como parâemtro um id de produto pra retornar um obs
    //de produto
    const url = `${this.baseUrl}/${id}`; //Interpola a url base + id do produto recebida por parâmetro pra dentro da
    //constante url
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    ); //Tem como retorno a chamada do método que exclui o produto do backend
  }

  errorHandler(e: any): Observable<any> {
    console.log(e);
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
