import { Component, OnInit } from '@angular/core';
import { FormularioService } from 'src/app/personas/services/formulario.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: []
})
export class FormComponent implements OnInit {

  public persona = {
    name: '',
    lastname:'',
    birthdate:''
  }
  
  constructor(private formularioService : FormularioService) {
  }
  
  /**
   * enviar
   */
  public enviar() {
    // this.formularioService.newPerson(this.name + " " + this.lastname + " " + this.birthdate)
    this.formularioService.newPerson(this.persona)
    this.persona = {
      name: '',
      lastname:'',
      birthdate:''
    }

  }

  ngOnInit(): void {
  }


}