import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ChatComponent } from "./form/components/chat/chat.component";
import { ListPersonalComponent } from "./form/components/listPersonal/listPersonal.component";

const routes = [
    {
        path: 'chat',
        component: ChatComponent
    }, {
        path: 'personal-data',
        component: ListPersonalComponent
    }, {
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