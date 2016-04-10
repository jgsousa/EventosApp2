import {Component}       from 'angular2/core';
import {
    RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS
} from 'angular2/router';
import {HomeComponent} from "./home.component";
import {SidebarComponent} from "./sidebar.component";
import { MdToolbar } from "@angular2-material/toolbar";
import { MD_SIDENAV_DIRECTIVES } from "@angular2-material/sidenav";
import {SessionService} from "./services/session.service";
import {SessionlistComponent} from "./sessionlist.component";
import {HTTP_PROVIDERS} from "angular2/http";
import {SessionformComponent} from "./components/sessionform.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/pages/app.component.html',
    directives: [ROUTER_DIRECTIVES, MdToolbar, MD_SIDENAV_DIRECTIVES, SidebarComponent],
    providers: [
        SessionService,
        HTTP_PROVIDERS
    ]
})

@RouteConfig([
    {
        path: '/',
        name: 'Sessions',
        component: SessionlistComponent,
        useAsDefault: true
    },
    {
        path: '/sessions',
        name: 'Sessions',
        component: SessionlistComponent,

    },
    {
        path: '/speakers',
        name: 'Speakers',
        component: HomeComponent
    },
    {
        path: '/documents',
        name: 'Documents',
        component: HomeComponent
    },
    {
        path: '/sessions/create',
        name: 'SessionCreate',
        component: SessionformComponent
    },
    {
        path: '/sessions/:id',
        name: 'SessionEdit',
        component: SessionformComponent
    }
])

export class AppComponent {
    title = 'Gestão de Eventos';
}
