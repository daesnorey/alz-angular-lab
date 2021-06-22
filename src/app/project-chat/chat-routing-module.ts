import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ChatParentComponent } from "./Componentes/chat-parent/chat-parent.component";
import { ChatSecondTestComponent } from "./Componentes/chat-second-test/chat-second-test.component";
import { ChatTestComponent } from "./Componentes/chat-test/chat-test.component";
import { ChatThirdTestComponent } from "./Componentes/chat-third-test/chat-third-test.component";

const rutas = [
    {
        path: '',
        children: [
            {path: 'oneTestSub', component: ChatTestComponent},
            {path: 'secondTestSub', component: ChatSecondTestComponent},
            {path: 'thirdTestSub', component: ChatThirdTestComponent},
            {path: '**', component: ChatParentComponent},
        ]
    },
    
]

@NgModule({
    imports: [
        RouterModule.forChild(rutas)
    ],
    exports: [
        RouterModule
    ]
})

export class ChatRoutingModule {

}