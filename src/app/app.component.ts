import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lab';

  public parentName?: String = "Juan" ;
  public parentLastName?: String = "Ochoa" ;
  public parentBirthDate?: String = "1996-06-07" ;

  public onChangeName(name: string){
    this.parentName = name;
  }

  public onChangeLastName(lastName: string){
    this.parentLastName = lastName;
  }

  public onChangeBirthDate(birthDate: string){
    this.parentBirthDate = birthDate;
  }
}

