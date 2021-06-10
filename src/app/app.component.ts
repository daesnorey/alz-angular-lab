import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lab';

  public matchName?: string="Carlos";
  public matchLastName?: string = "Suarez";
  public matchBirthDate?: string = "1996-01-02";

  public onChangeName(name: string){
    this.matchName = name;
  }

  public onChangeLastName(lastName: string){
    this.matchLastName = lastName;
  }

  public onChangeBirthDate(birthDate: string){
    this.matchBirthDate = birthDate;
  }

}
