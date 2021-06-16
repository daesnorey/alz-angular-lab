import { Component } from '@angular/core';
import { FormService } from './service-form/form.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FormService]

})
export class AppComponent {
  title = 'angular-lab';

//FORMULARIO
   parentName!: string;
   parentLastname!: string;
   parentBirthdate!: string;
}

