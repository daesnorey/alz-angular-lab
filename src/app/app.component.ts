import { Component} from '@angular/core';
import { ChatService } from './chat/chat.service';
import { FormularioService } from './formulario/formulario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[
    FormularioService,
    ChatService
  ]
})
export class AppComponent {
  title = 'angular-lab';
  
  constructor(public formularioService: FormularioService){}

}
