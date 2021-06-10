import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  ngOnInit(): void {
  }
  @Input()
  public name?: string;

  @Input()
  public lastName?: string;

  @Input()
  public birthDate?: string;

  /*public onNameChanged(ev: any){
    this.name = ev.target.value;
  }*/

  @Output()
  public valueChangedName!: EventEmitter<string>;


  @Output()
  public valueChangedLastName!: EventEmitter<string>;

  @Output()
  public valueChangedBirthDate!: EventEmitter<string>;

  constructor(){
    this.valueChangedName = new EventEmitter();
    this.valueChangedLastName = new EventEmitter();
    this.valueChangedBirthDate = new EventEmitter();
  }

  public onChangedName(eve: any){
    this.valueChangedName.next(eve.target.value);
  }
  public onChangedLastName(eve: any){
    this.valueChangedLastName.next(eve.target.value);
  }
  public onChangedBirthDate(eve: any){
    this.valueChangedBirthDate.next(eve.target.value);
  }
}
