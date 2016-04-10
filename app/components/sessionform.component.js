System.register(['angular2/core', "angular2/router", "../services/session.service", "@angular2-material/input", "@angular2-material/button", "@angular2-material/card", "../model/session"], function(exports_1, context_1) {
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
    var core_1, router_1, session_service_1, input_1, button_1, card_1, session_1;
    var SessionformComponent, SessionViewModel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (session_service_1_1) {
                session_service_1 = session_service_1_1;
            },
            function (input_1_1) {
                input_1 = input_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (session_1_1) {
                session_1 = session_1_1;
            }],
        execute: function() {
            SessionformComponent = (function () {
                function SessionformComponent(_sessionService, _routeParams, _router) {
                    this._sessionService = _sessionService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this.FormSaved = new core_1.EventEmitter();
                    this.FormCanceled = new core_1.EventEmitter();
                }
                SessionformComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    if (id) {
                        this.model = new SessionViewModel(new session_1.Session());
                        this._sessionService.getSessaoForId(id).subscribe(function (res) {
                            console.log(JSON.stringify((res)));
                            _this.session = res;
                            _this.model = new SessionViewModel(res);
                        });
                    }
                    else {
                        console.log("novo");
                        this.session = new session_1.Session();
                        this.model = new SessionViewModel(this.session);
                    }
                };
                SessionformComponent.prototype.Save = function () {
                    var _this = this;
                    console.log(JSON.stringify(this.model));
                    this.model.toModel(this.session);
                    var id = this._routeParams.get('id');
                    if (id) {
                        this._sessionService.updateSessao(id, this.session)
                            .subscribe(function (res) {
                            _this.session._id = res._id;
                            _this.FormSaved.emit({});
                            _this._router.navigate(["Sessions"]);
                        });
                    }
                    else {
                        this._sessionService.createSessao(this.session)
                            .subscribe(function (res) {
                            _this.session._id = res._id;
                            _this.FormSaved.emit({});
                            _this._router.navigate(["Sessions"]);
                        });
                    }
                };
                SessionformComponent.prototype.Cancel = function () {
                    this.FormCanceled.emit({});
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SessionformComponent.prototype, "FormSaved", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SessionformComponent.prototype, "FormCanceled", void 0);
                SessionformComponent = __decorate([
                    core_1.Component({
                        selector: 'my-sessionform',
                        templateUrl: 'app/pages/sessionform.component.html',
                        styleUrls: ['app/styles/session.css'],
                        directives: [input_1.MD_INPUT_DIRECTIVES, card_1.MD_CARD_DIRECTIVES, button_1.MdButton]
                    }), 
                    __metadata('design:paramtypes', [session_service_1.SessionService, router_1.RouteParams, router_1.Router])
                ], SessionformComponent);
                return SessionformComponent;
            }());
            exports_1("SessionformComponent", SessionformComponent);
            SessionViewModel = (function () {
                function SessionViewModel(session) {
                    var date = new Date(session.dataInicio);
                    var yyyy = date.getFullYear().toString();
                    var mm = (date.getMonth() + 1).toString(); // getMonth() is zero-based
                    var dd = date.getDate().toString();
                    var HH = date.getHours().toString();
                    var MM = date.getMinutes().toString();
                    this.nome = session.nome;
                    this.data = yyyy + (mm[1] ? "-" + mm : "-0" + mm[0]) + (dd[1] ? "-" + dd : "-0" + dd[0]);
                    this.horaInicio = (HH[1] ? HH : "0" + HH[0]) + (MM[1] ? ":" + MM : ":0" + MM[0]);
                    this.horaFim = (HH[1] ? HH : "0" + HH[0]) + (MM[1] ? ":" + MM : ":0" + MM[0]);
                    this.descricao = session.descricao;
                }
                SessionViewModel.prototype.toModel = function (session) {
                    var x = new Date(this.data + 'T' + this.horaFim + ":00");
                    var y = new Date(this.data + 'T' + this.horaFim + ":00");
                    session.nome = this.nome;
                    session.dataInicio = x.toISOString();
                    session.dataFim = y.toISOString();
                    session.descricao = this.descricao;
                };
                return SessionViewModel;
            }());
        }
    }
});
//# sourceMappingURL=sessionform.component.js.map