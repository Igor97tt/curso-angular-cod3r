import { Component } from '@angular/core'; //Importa a interface padrão para se usar componentes

@Component({
  selector: 'app-root', //cria um seletor que é chamado mo .index principal
  templateUrl: 'app.component.html' //informa local para onde o seletor leva
})
export class AppComponent {
  header: string;
} //exporta a classe do componente principal, tornando-a visível
