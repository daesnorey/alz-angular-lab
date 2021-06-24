import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-formulario',
  templateUrl: './nuevo-formulario.component.html',
  styleUrls: ['./nuevo-formulario.component.css']
})
export class NuevoFormularioComponent implements OnInit {

  public newForm!: FormGroup;

  constructor() {
    this.newForm = new FormGroup({
      'name': new FormControl('',[Validators.minLength(4), Validators.maxLength(50), Validators.required]),
      'lastname': new FormControl('',[Validators.minLength(4), Validators.maxLength(50), Validators.required]),
      'birthdate': new FormControl('',[Validators.required]),
      'gender': new FormControl('',[Validators.minLength(4), Validators.maxLength(20), Validators.required]),
      'user': new FormControl('',[Validators.minLength(4), Validators.maxLength(50), Validators.email, Validators.pattern(/\@everis\.com$/), Validators.required]),
      'password': new FormControl('',[Validators.minLength(4), Validators.maxLength(20), Validators.required]),
    }); 
  }

  public onMessageSubmited(){    
 
  }


  ngOnInit(): void {
  }

}
