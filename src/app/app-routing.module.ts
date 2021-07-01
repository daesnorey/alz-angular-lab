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
      path: 'nuevo-form',
      loadChildren: () => import('./nuevo-formulario/nuevo-formulario.module').then(m => m.NuevoFormularioModule),      
    },
    {
      path: 'promises',
      loadChildren: () => import('./promises-observables/promises-observables.module').then(m => m.PromisesObservablesModule),      
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
  