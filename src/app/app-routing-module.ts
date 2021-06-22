import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PersonalDataPaternComponent } from "./project-personal-data/Componentes/personal-data-parent/personal-data-parent.component";

// Se crea array que contiene lista de rutas a las cuales se puede acceder.

const rutas = [
    /*Path: Paquete al cual voy a acceder
      Component: Se relaciona componente al cual se va a acceder en path, en este caso relaciono el componente padre.
      Para definir una ruta comodin se utiliza '**' en el path
    */
    { path: 'appChat', loadChildren: () => import('./project-chat/project-chat.module').then(m => m.ProjectChatModule)  },
    { path: 'appPersonalData', component: PersonalDataPaternComponent },
    { path: '**', redirectTo: 'appChat' }
]
@NgModule({
    imports:[
        RouterModule.forRoot(rutas),
    ],
    exports:[
        RouterModule,
    ]
})

export class RoutingModule {

}