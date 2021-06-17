import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatModule} from './chat/chat.module'
import { PersonasModule } from './personas/personas.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ChatModule,
    PersonasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
