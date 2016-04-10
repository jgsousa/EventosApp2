System.register(['angular2/core', '@angular2-material/card', "../model/session"], function(exports_1, context_1) {
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
    var core_1, card_1, session_1;
    var SessioncardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (session_1_1) {
                session_1 = session_1_1;
            }],
        execute: function() {
            SessioncardComponent = (function () {
                function SessioncardComponent() {
                    this.detailRequested = new core_1.EventEmitter();
                    this.deleteRequested = new core_1.EventEmitter();
                }
                SessioncardComponent.prototype.DetailRequested = function () {
                    this.detailRequested.emit({ id: this.session._id });
                };
                SessioncardComponent.prototype.DeleteRequested = function () {
                    this.deleteRequested.emit({ id: this.session._id });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', session_1.Session)
                ], SessioncardComponent.prototype, "session", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SessioncardComponent.prototype, "detailRequested", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SessioncardComponent.prototype, "deleteRequested", void 0);
                SessioncardComponent = __decorate([
                    core_1.Component({
                        selector: 'my-sessioncard',
                        templateUrl: 'app/pages/sessioncard.component.html',
                        directives: [card_1.MD_CARD_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SessioncardComponent);
                return SessioncardComponent;
            }());
            exports_1("SessioncardComponent", SessioncardComponent);
        }
    }
});
//# sourceMappingURL=sessioncard.component.js.map