import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

const routes = [  
    {
      path: 'form',
      loadChildren: () => import('./form/form.module').then(m => m.FormModule),
      /* component: FormComponent, */
    },
    {
      path: 'chat',
      loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule),
      /* component: ChatComponent, */
    },
    {
        path: '**',
        redirectTo: 'test',
    },    
]

@NgModule({
    imports: [
      RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
  })  
  export class AppRoutingModule { }
  