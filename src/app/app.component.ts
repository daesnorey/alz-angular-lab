import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica';

  public parentName?: String = "Nicolas";
  public parentLastName?: String = "Chaves";
  public parentBirthDate?: String = "08-02-1993";
}
