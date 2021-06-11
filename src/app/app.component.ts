import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lab';
  
   parentName: string='Juan';
   parentLastname: string='Ordóñez';
   parentBirthdate: string='1982-07-04';

   public onNameChangeParent (emmitedName: string){this.parentName = emmitedName}
   public onLastnameChangeParent (emmitedLastname: string){this.parentLastname = emmitedLastname}
   public onBirthdateChangeParent (emmitedBirthdate: string){this.parentBirthdate = emmitedBirthdate}
   
}

