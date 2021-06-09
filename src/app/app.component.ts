import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-appEveris';

  public name: string = 'Juan Carlos';
  public lastname: string = 'Sanchez';
  public birthdate: string = '1995-06-24';

  constructor(){

  }

  public onNameChanged(ev: any){
    this.name = ev.target.value;
  }

  public onLastnameChanged(ev: any){
    this.lastname = ev.target.value;
  }

  public onBirthdateChanged(ev: any){
    this.birthdate = ev.target.value;
  }
}
