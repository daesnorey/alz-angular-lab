import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name: string = 'Jaime';
  public lastname: string = 'Zabala';
  public birthdate: string = '1998-11-30';
  
  title = 'proyectangul';
  constructor() { }

  public onNameChanged(ev: any){
  this.name=ev.target.value;
  }
  public onLastnameChanged(ev: any){

    this.lastname=ev.target.value;
  }
  public onBirthdateChanged(ev: any){

    this.birthdate=ev.target.value;
  }
}
