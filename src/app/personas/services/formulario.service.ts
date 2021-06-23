import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class FormularioService {

  private persons : any[] = []

  /**
   * newPerson
   */
  public newPerson(_persona : any) {
    this.persons.push(_persona)
  }
 
  /**
   * getPersons
   */
  public getPersons() {
    return this.persons;
  }

  constructor() { }
}
