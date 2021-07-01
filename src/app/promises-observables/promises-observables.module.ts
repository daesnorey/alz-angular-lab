import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { PromisesObservablesRoutingModule } from './promises-observables-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CountryService } from './services/country.service';


@NgModule({
  declarations: [
    TestComponent,
  ],
  imports: [
    CommonModule,
    PromisesObservablesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    TestComponent,
  ],
  providers: [
    CountryService,
  ]
})
export class PromisesObservablesModule { }
