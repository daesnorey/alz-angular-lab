import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
