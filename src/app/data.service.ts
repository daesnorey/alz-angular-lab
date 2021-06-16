import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  public name!: string;
  public lastname!: string;
  public birthdate!: string;

  public setName(name: string) {
    this.name = name;
  }
}
