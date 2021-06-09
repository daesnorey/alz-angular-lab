import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public name: String = "Juan" ;
  public lastName: String = "Ochoa" ;
  public birthDate: String = "1996-06-07" ;

  public onNameChanged(ev: any){
    this.name = ev.target.value;
  }

  public onLastNameChanged(ev: any){
    this.lastName = ev.target.value;
  }

  public onBirthDateChanged(ev: any){
    this.birthDate = ev.target.value;
  }

  


}
