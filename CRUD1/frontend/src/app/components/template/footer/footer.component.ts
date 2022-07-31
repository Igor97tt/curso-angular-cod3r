import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer', //Define uma seletora para o componente de rodapé
  templateUrl: './footer.component.html', //Informa pra onde a seletora leva
  styleUrls: ['./footer.component.css'] //Infomra o caminhao para o css do componente
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
