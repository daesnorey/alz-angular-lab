import { Component } from '@angular/core';
import { FormularioService } from './personas/services/formulario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FormularioService]
})
export class AppComponent {
  title = 'alz-angular-lab';
 
  public onChange(value: string){
  }
  
}
