import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../../services/formulario.service';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css']
})

export class PersonaFormComponent implements OnInit {

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
