import { Component} from '@angular/core';
import { FormularioService } from './formulario/formulario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[
    FormularioService
  ]
})
export class AppComponent {
  title = 'angular-lab';
  
  constructor(public formularioService: FormularioService){}

}
