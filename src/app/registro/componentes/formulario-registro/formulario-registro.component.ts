import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})


export class FormularioRegistroComponent implements OnInit {
  private validadores  : Validators [] = [Validators.required,Validators.minLength(5),Validators.maxLength(10)];

  public registroFormGroup = new FormGroup({});
  public get telefonos () {
    return (this.registroFormGroup.get('telefonos') as FormArray)
  }
  public get skills () {
    return (this.registroFormGroup.get('skills') as FormArray)
  }


  public generos = [
    {
      "index" : "0",
      "genero" : "Masculino",
    },
    {
      "index" : "1",
      "genero" : "Femenino",
    },
    {
      "index" : "2",
      "genero" : "No binario",
    },
  ]

  constructor(private formBuilder:FormBuilder) { 
    this.registroFormGroup = new FormGroup({
      nombre : new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]) ,
      apellido : new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]) ,
      fechaNacimiento : new FormControl('',[Validators.required]) ,
      genero : new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(50)]) ,
      usuario : new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50),Validators.email]) ,
      password : new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]) ,
      telefonos : new FormArray([]),
      skills : new FormArray([]),
    });

    this.addTelefono();
    this.addSkill();
  }

  /**
   * enviar
   */
  public enviar() {
    alert(
      JSON.stringify(this.registroFormGroup.valid)
      );
  }

  addSkill() {
    this.skills.push(new FormGroup({
      "nombre" : new FormControl('',[Validators.required,]),
      "experiencia" : new FormControl('',[Validators.required,]),
    }));
  }

  addTelefono() {
    this.telefonos.push(new FormControl())
  }

  removeTelono(index : number) {
    this.telefonos.removeAt(index);
  }

  removeSkill(index : number) {
    this.skills.removeAt(index);
  }

  ngOnInit(): void {
  }

}
