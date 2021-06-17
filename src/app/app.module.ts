import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectChatModule } from './project-chat/project-chat.module';

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProjectChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
