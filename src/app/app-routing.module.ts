import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { PersonalDataComponent } from "./personal-data/personal-data.component";

const routes = [
    {
       path: 'chat',
       loadChildren: 
       () => import('./chat/chat.module').then(m => m.ChatModule),
    },
    {
        path: 'personal-data',
        component: PersonalDataComponent,
    },
    {
        path: '**',
        redirectTo: 'chat',
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}