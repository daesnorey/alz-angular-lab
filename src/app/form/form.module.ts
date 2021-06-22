import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormService } from './services/service-form/form.service';

import { FormComponent } from './components/form/form.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { FormsModule } from '@angular/forms';
import { FormRoutingModule } from './form-routing.module';


@NgModule({
  declarations: [    
    FirstComponentComponent,
    SecondComponentComponent,
    FormComponent,
],
  imports: [
    CommonModule,
    FormsModule,
    FormRoutingModule,
  ],
  exports:[
    FirstComponentComponent,
    SecondComponentComponent,
    FormComponent,
  ],
  providers: [
    FormService,
  ]
})
export class FormModule { }
