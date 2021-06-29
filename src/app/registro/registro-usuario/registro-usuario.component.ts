import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  public miFormulario!: FormGroup;

  constructor() {
    this.miFormulario = new FormGroup({
      'usuario': new FormControl('', [Validators.required,
      Validators.email,
      Validators.pattern(/@everis.com$/),
      Validators.minLength(5),
      Validators.maxLength(40)]),
      'password': new FormControl('', [Validators.required,
      Validators.minLength(5),
      Validators.maxLength(15)]),
      'nombre': new FormControl('', [Validators.required,
      Validators.minLength(5),
      Validators.maxLength(15)]),
      'apellido': new FormControl('', [Validators.required,
      Validators.minLength(5),
      Validators.maxLength(15)]),
    });
  }

  public submit(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    alert(JSON.stringify(this.miFormulario.value))
  }

  ngOnInit(): void {
  }

}
