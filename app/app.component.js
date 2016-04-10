System.register(['angular2/core', 'angular2/router', "./home.component", "./sidebar.component", "@angular2-material/toolbar", "@angular2-material/sidenav", "./services/session.service", "./sessionlist.component", "angular2/http", "./components/sessionform.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_component_1, sidebar_component_1, toolbar_1, sidenav_1, session_service_1, sessionlist_component_1, http_1, sessionform_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (sidenav_1_1) {
                sidenav_1 = sidenav_1_1;
            },
            function (session_service_1_1) {
                session_service_1 = session_service_1_1;
            },
            function (sessionlist_component_1_1) {
                sessionlist_component_1 = sessionlist_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (sessionform_component_1_1) {
                sessionform_component_1 = sessionform_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Gestão de Eventos';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/pages/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, toolbar_1.MdToolbar, sidenav_1.MD_SIDENAV_DIRECTIVES, sidebar_component_1.SidebarComponent],
                        providers: [
                            session_service_1.SessionService,
                            http_1.HTTP_PROVIDERS
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Sessions',
                            component: sessionlist_component_1.SessionlistComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/sessions',
                            name: 'Sessions',
                            component: sessionlist_component_1.SessionlistComponent,
                        },
                        {
                            path: '/speakers',
                            name: 'Speakers',
                            component: home_component_1.HomeComponent
                        },
                        {
                            path: '/documents',
                            name: 'Documents',
                            component: home_component_1.HomeComponent
                        },
                        {
                            path: '/sessions/create',
                            name: 'SessionCreate',
                            component: sessionform_component_1.SessionformComponent
                        },
                        {
                            path: '/sessions/:id',
                            name: 'SessionEdit',
                            component: sessionform_component_1.SessionformComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map