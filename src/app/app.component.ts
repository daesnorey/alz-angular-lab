import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'my-appEveris';

  /*public parentName?: String = "Juan Carlos" ;
  public parentLastName?: String = "Sanchez Solorzano" ;
  public parentBirthDate?: String = "1995-06-24" ;

  public onChangeName(name: string){
    this.parentName = name;
  }

  public onChangeLastName(lastName: string){
    this.parentLastName = lastName;
  }

  public onChangeBirthDate(birthDate: string){
    this.parentBirthDate = birthDate;
  } */

  public parentMessage: string ='';
  public parentMessages: string[]=[];

  public onMessageChangeParent(emmitedMessage: string){
    this.parentMessage = emmitedMessage;     
    this.parentMessages.push(emmitedMessage);
   }
}
