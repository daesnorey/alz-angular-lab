import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ChatComponent } from "./chat/components/chat/chat.component";
import { FormComponent } from "./form/components/form/form.component";

const routes = [
    {
    path: 'form',
    component: FormComponent,
    },
    {
      path: 'chat',
      component: ChatComponent,
      },
  
    {
        path: '**',
        redirectTo: '',
    },    
]

@NgModule({
    imports: [
      RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
  })  
  export class AppRoutingModule { }
  