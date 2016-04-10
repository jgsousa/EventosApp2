System.register(['angular2/core', 'angular2/http', "rxjs/Observable", 'rxjs/add/operator/map', 'rxjs/add/operator/catch'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var SessionService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            SessionService = (function () {
                function SessionService(http) {
                    this.http = http;
                    this._endpointUrl = 'http://localhost:3000/sessoes';
                }
                SessionService.prototype.getAllSessoes = function () {
                    return this.http.get(this._endpointUrl)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                SessionService.prototype.getSessaoForId = function (id) {
                    return this.http.get(this._endpointUrl + '/' + id.toString())
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                SessionService.prototype.createSessao = function (data) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(this._endpointUrl + '/create', JSON.stringify(data), { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                SessionService.prototype.updateSessao = function (id, data) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.put(this._endpointUrl + '/' + id, JSON.stringify(data), { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                SessionService.prototype.deleteSessao = function (id) {
                };
                SessionService.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                SessionService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SessionService);
                return SessionService;
            }());
            exports_1("SessionService", SessionService);
        }
    }
});
//# sourceMappingURL=session.service.js.map