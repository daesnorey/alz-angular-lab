import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormModule } from './form/form.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormModule,
    appRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }