import { Injectable } from '@angular/core';

@Injectable()

export class FormService {

  constructor() { }

  public personas: string[] =[];

  public addMessage(sentName: string, sentLastname: string, sentBirthdate: string){
    this.personas.push(sentName + ',' + sentLastname + ',' + sentBirthdate);
    console.log("guardando :" + sentName + ', ' + sentLastname + ', ' + sentBirthdate);
  }
}