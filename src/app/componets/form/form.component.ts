import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormularioService } from 'src/app/services/formulario.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public name?: string;
  public lastname?: string;
  public birthdate?: string;
  
  constructor(private formularioService : FormularioService) {
  }
  
  /**
   * enviar
   */
  public enviar() {
    // this.formularioService.newPerson(this.name + " " + this.lastname + " " + this.birthdate)
    this.formularioService.newPerson(
      {
        name: this.name,
        lastname: this.lastname,
        birthdate : this.birthdate
      }
    )

    this.name = '';
    this.lastname = '';
    this.birthdate = '';
  }

  ngOnInit(): void {
  }


}