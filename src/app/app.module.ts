import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { NuevoComponenteHijoComponent } from './nuevo-componente-hijo/nuevo-componente-hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponenteComponent,
    NuevoComponenteHijoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
