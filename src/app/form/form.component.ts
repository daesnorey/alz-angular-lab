import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  ngOnInit(): void {
  }

  @Input()
  public name?: String;

  @Input()
  public lastName?: String;

  @Input()
  public birthDate?: String;

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
