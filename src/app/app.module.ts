import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './componets/form/form.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PersonalChatComponent } from './componets/personal-chat/personal-chat.component';
import { TableChatComponent } from './componets/table-chat/table-chat.component';
import { ChatComponent } from './componets/chat/chat.component';
import { PersonProfileComponent } from './componets/person-profile/person-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PersonalChatComponent,
    TableChatComponent,
    ChatComponent,
    PersonProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
