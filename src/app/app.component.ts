import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Capacitación Angular';
  private name = 'Daniel';

  constructor(){

  }
  public getName(){
    return this.name;
  }

}
