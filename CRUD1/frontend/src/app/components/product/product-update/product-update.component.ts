import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { Product } from "../product.model";

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService, //Injeta o serviço que é responsável por criar, atualizar etc
    private router: Router, //Injeta o router para poder fazer as rotas
    private route: ActivatedRoute //Injeção padrão para pegar o id da rota
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id"); //Constante id recebe o id informado na rota.
    this.productService.readById(id).subscribe((product) => { //Faz um get pelo id e pega um produto para preencher
      //o formulário.
      this.product = product; //Preenche o formulário com o produto captado através do get by id.
    });
  } //Este método preenche o formulário do produto automaticamente para que possamos alterá-lo.

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => { //Chama o método de alteração de produto mandando o
      //produto que queremos atualizar, como parâmetro.
      this.productService.showMessage("Produto atualizado com sucesso!"); //Uma vez que é atualizado, exibibe msg
      this.router.navigate(["/products"]); //Navega de volta para a tela de produtos já cadastrados.
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]); //Chama o router e faz a navegação de volta para a tela de produtos, uma
    //vez que o botão "Cancelar" é acionado.
  }
}
