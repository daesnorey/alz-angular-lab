import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ValidateFromComponent } from './validate-from/validate-from.component';



@NgModule({
  declarations: [
    ValidateFromComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    ValidateFromComponent,
  ],
  providers:[
    
  ]
})
export class FormularioModule { }
