import { Injectable } from '@angular/core';

@Injectable()

export class FormularioService {

  public name: string[] = [];

  public lastname: string[] = [];

  public addName(Name: string){
    this.name.push(Name);
  }

  public addLastname(Lastname: string){
    this.lastname.push(Lastname);
  }
}
