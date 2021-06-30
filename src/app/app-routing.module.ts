import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ChatComponent } from "./form/components/chat/chat.component";
import { ListPersonalComponent } from "./form/components/listPersonal/listPersonal.component";
import { ValidateFromComponent } from "./formulario/validate-from/validate-from.component";

const routes = [
    {
        path: 'chat',
        component: ChatComponent
    }, {
        path: 'personal-data',
        component: ListPersonalComponent
    }, {
        path: 'validate-from',
        component: ValidateFromComponent
    },  {
        path: '**',
        redirectTo: 'chat'
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
})
export class appRoutingModule {

}