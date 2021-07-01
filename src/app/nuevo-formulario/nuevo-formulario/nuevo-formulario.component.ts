import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-formulario',
  templateUrl: './nuevo-formulario.component.html',
  styleUrls: ['./nuevo-formulario.component.css']
})
export class NuevoFormularioComponent implements OnInit {

  public newForm!: FormGroup;
  public complexForm!: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    ) {
      this.newForm = new FormGroup({
        'name': new FormControl('',[Validators.minLength(4), Validators.maxLength(50), Validators.required]),
        'lastname': new FormControl('',[Validators.minLength(4), Validators.maxLength(50), Validators.required]),
        'birthdate': new FormControl('',[Validators.required]),
        'gender': new FormControl('',[Validators.minLength(4), Validators.maxLength(20), Validators.required]),
        'user': new FormControl('',[Validators.minLength(4), Validators.maxLength(50), Validators.email, Validators.pattern(/\@everis\.com$/), Validators.required]),
        'password': new FormControl('',[Validators.minLength(4), Validators.maxLength(20), Validators.required]),
      }); 

      this.complexForm = this.formBuilder.group({
        'nombre': new FormControl('',[Validators.required]),
        'apellido': new FormControl('',[Validators.required]),
        'telefonos': new FormArray([]),
        'skills': new FormArray([]),
      });

      (this.complexForm.get('telefonos') as FormArray).push(new FormControl());
      (this.complexForm.get('skills') as FormArray).push(new FormGroup({
        'nombre': new FormControl('', Validators.required),
        'experiencia': new FormControl('',Validators.required),
      }));
    }

  public onMessageSubmited(){    
 
  }


  ngOnInit(): void {
  }

}
