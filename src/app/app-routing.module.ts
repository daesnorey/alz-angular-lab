import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChatParentComponent } from './chat_module/chat-parent/chat-parent.component';
import { FormChatComponent } from './form-chat/form-chat.component';

const routes = [
  { path: 'appChat', component: ChatParentComponent},
  { path: 'appForm', component: FormChatComponent},
  { path: '**', redirectTo: 'appChat'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
