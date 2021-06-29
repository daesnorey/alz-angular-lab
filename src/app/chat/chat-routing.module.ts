import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ChatWrapperComponent } from "./chat-wrapper/chat-wrapper.component";

const routes =[
    {
        path: '',
        component: ChatWrapperComponent,
    },
    {
        path: '**',
        redirectTo : '',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports : [RouterModule],
})
export class ChatRoutingModule{}