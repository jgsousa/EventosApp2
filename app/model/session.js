System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Session;
    return {
        setters:[],
        execute: function() {
            Session = (function () {
                function Session() {
                    this.dataInicio = new Date().toISOString();
                    this.dataFim = new Date().toISOString();
                }
                Object.defineProperty(Session.prototype, "horario", {
                    get: function () {
                        console.log("passou");
                        return this.dataInicio + " - " + this.dataFim;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Session;
            }());
            exports_1("Session", Session);
        }
    }
});
//# sourceMappingURL=session.js.map