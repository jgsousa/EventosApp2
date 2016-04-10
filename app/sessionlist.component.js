System.register(['angular2/core', "./services/session.service", "@angular2-material/list", './components/sessioncard.component', "@angular2-material/button", 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, session_service_1, list_1, sessioncard_component_1, button_1, router_1;
    var SessionlistComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (session_service_1_1) {
                session_service_1 = session_service_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            },
            function (sessioncard_component_1_1) {
                sessioncard_component_1 = sessioncard_component_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            SessionlistComponent = (function () {
                function SessionlistComponent(_sessionService, _router) {
                    this._sessionService = _sessionService;
                    this._router = _router;
                }
                SessionlistComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._sessionService.getAllSessoes()
                        .subscribe(function (sessions) {
                        _this.sessions = sessions;
                        console.log(_this.sessions);
                    });
                };
                SessionlistComponent.prototype.OnCreate = function () {
                    console.log("clicked");
                    this._router.navigate(['SessionCreate']);
                };
                SessionlistComponent.prototype.NavigateDetail = function (evt) {
                    console.log(JSON.stringify(evt));
                    this._router.navigate(["SessionEdit", { id: evt.id }]);
                };
                SessionlistComponent = __decorate([
                    core_1.Component({
                        selector: 'my-sessionlist',
                        templateUrl: 'app/pages/sessionlist.component.html',
                        directives: [list_1.MD_LIST_DIRECTIVES, sessioncard_component_1.SessioncardComponent, button_1.MdButton]
                    }), 
                    __metadata('design:paramtypes', [session_service_1.SessionService, router_1.Router])
                ], SessionlistComponent);
                return SessionlistComponent;
            }());
            exports_1("SessionlistComponent", SessionlistComponent);
        }
    }
});
//# sourceMappingURL=sessionlist.component.js.map