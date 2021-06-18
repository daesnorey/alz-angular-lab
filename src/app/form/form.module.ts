import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormService } from './services/service-form/form.service';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [    
    FirstComponentComponent,
    SecondComponentComponent
],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FirstComponentComponent,
    SecondComponentComponent
  ],
  providers: [
    FormService
  ]
})
export class FormModule { }
