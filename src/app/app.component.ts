import { Component } from '@angular/core';
import { Persona } from './model/persona';
import { FormularioService } from './services/formulario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FormularioService]
})
export class AppComponent {
  title = 'alz-angular-lab';
  public parentName?: string = 'Placeholder';
  public parentLastname?: string = 'Placeholder';
  public parentBirthDate?: string = '1990-01-01';
  public menssageList : string[] = [];
 
  public onChange(value: string){
    this.parentName = value;
  }

  public addMenssage(value: string){
    this.menssageList.push(value);
    console.log(this.menssageList.length)
  }
  
}
