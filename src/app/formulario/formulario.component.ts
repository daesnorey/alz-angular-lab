import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormularioService } from './formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(public formularioService: FormularioService){
    
  }

  public onChangedName(eve: any){
    this.formularioService.onChangeName(eve.target.value);
  }
  public onChangedLastName(eve: any){
    this.formularioService.onChangeLastName(eve.target.value);
  }
  public onChangedBirthDate(eve: any){
    this.formularioService.onChangeBirthDate(eve.target.value);
  }
}