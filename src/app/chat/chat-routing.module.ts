import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ChatTestComponent } from "./components/chat-test/chat-test.component";
import { PersonalChatComponent } from "./components/personal-chat/personal-chat.component";
import { Test1Component } from "./components/test1/test1.component";
import { Test2Component } from "./components/test2/test2.component";

const routes = [
    {
        path: '',
        component: PersonalChatComponent,
    },
    {
        path: 'test',
        component: ChatTestComponent,
        children: [
            {
                path: 'test-1',
                component: Test1Component,
            },
            {
                path: 'test-2',
                component: Test2Component,
            },
            {
                path: '**',
                redirectTo: 'test-1',
            },
        ]
    },
    {
        path: '**',
        redirectTo: ''
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChatRoutingModule {
}