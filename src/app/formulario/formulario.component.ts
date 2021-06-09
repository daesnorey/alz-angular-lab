import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public name: string="Carlos";
  public lastName: string="Suarez";
  public birthDate: string="1996-02-02";

  public onNameChanged(ev: any){
    this.name = ev.target.value;
  }

  public onlastNameChanged(ev: any){
    this.lastName = ev.target.value;
  }

  public onbirthDateChanged(ev: any){
    this.birthDate = ev.target.value;
  }
}
