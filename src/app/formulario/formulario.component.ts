import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public miFormulario!: FormGroup;

  constructor() {
    this.miFormulario = new FormGroup({
      'nombre': new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      'apellido': new FormControl('',
      [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
      ]),
      'fechaNacimiento': new FormControl('',[
        Validators.required,
      ]),
      'genero': new FormControl('',[
        Validators.required,
      ]),
      'usuario': new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(/\@everis\.com$/),
        Validators.minLength(2),
        Validators.maxLength(100),
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
      ]),

    });
  }

  public submit(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();

    alert(JSON.stringify(this.miFormulario.value));
  }

  ngOnInit(): void {
  }

}
