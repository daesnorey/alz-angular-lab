import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  public matchName?: string="Carlos";
  public matchLastName?: string = "Suarez";
  public matchBirthDate?: string = "1996-01-02";

  constructor() { }

  public onChangeName(name: string){
    this.matchName = name;
  }

  public onChangeLastName(lastName: string){
    this.matchLastName = lastName;
  }

  public onChangeBirthDate(birthDate: string){
    this.matchBirthDate = birthDate;
  }
}
