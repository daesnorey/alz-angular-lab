import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public parentName?: string = 'Daniel';
  public parentLastname?: string = 'Novoa';
  public parentBirthDate?: string = '1991-01-01';

  public onChange(value: any) {
    this.parentName = value;
  }
}
