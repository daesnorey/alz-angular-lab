import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})


export class FormularioRegistroComponent implements OnInit {
  private validadores  : Validators [] = [Validators.required,Validators.minLength(5),Validators.maxLength(10)];

  public registroFormGroup = new FormGroup({
    nombre : new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]) ,
    apellido : new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]) ,
    fechaNacimiento : new FormControl('',[Validators.required]) ,
    genero : new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]) ,
    usuario : new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50),Validators.email]) ,
    password : new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]) ,
  });

  constructor() { }

  /**
   * enviar
   */
  public enviar() {
    alert(
      JSON.stringify(this.registroFormGroup.valid)
      );
  }

  ngOnInit(): void {
  }

}
