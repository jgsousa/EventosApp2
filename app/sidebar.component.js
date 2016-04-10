System.register(['angular2/core', "./SidebarItem", '@angular2-material/list', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, SidebarItem_1, list_1, router_1;
    var SidebarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (SidebarItem_1_1) {
                SidebarItem_1 = SidebarItem_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            SidebarComponent = (function () {
                function SidebarComponent() {
                    this.linkClicked = new core_1.EventEmitter();
                }
                SidebarComponent.prototype.ngOnInit = function () {
                    this.Items = [
                        new SidebarItem_1.SidebarItem("Sessões", "/Sessions"),
                        new SidebarItem_1.SidebarItem("Oradores", "/Speakers"),
                        new SidebarItem_1.SidebarItem("Documentos", "/Documents")
                    ];
                    this.Items.forEach(function (item) { return console.log(item.route); });
                };
                SidebarComponent.prototype.CloseMenu = function (evt) {
                    console.log(evt);
                    this.linkClicked.emit({});
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SidebarComponent.prototype, "linkClicked", void 0);
                SidebarComponent = __decorate([
                    core_1.Component({
                        selector: 'my-sidebar',
                        templateUrl: 'app/pages/sidebar.component.html',
                        directives: [list_1.MD_LIST_DIRECTIVES, router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SidebarComponent);
                return SidebarComponent;
            }());
            exports_1("SidebarComponent", SidebarComponent);
        }
    }
});
//# sourceMappingURL=sidebar.component.js.map