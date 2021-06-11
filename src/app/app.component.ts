import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public parentName: string = 'Jaime';
  public parentLastname: string = 'Zabala';
  public parentBirthdate: string = '1998-11-30';
  public menssageLista: string[]=[];
  public parentNames: string = 'Placeholder';
  
  title = 'proyectangul';
  constructor() { }

  public onChange(value: string){
    this.parentNames= value;
  }
  public addMensagge(value: string){
    this.menssageLista.push(value);
    console.log(this.menssageLista.length)
  }

  public onNameChanged(name: string){
  this.parentName=name;
  }
  public onLastnameChanged(lastName: string){

    this.parentLastname=lastName  ;
  }
  public onBirthdateChanged(birthDate: string){

    this.parentBirthdate=birthDate;
  }

  
}
