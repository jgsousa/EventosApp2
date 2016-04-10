import {Component} from 'angular2/core';
import {MD_LIST_DIRECTIVES} from "@angular2-material/list";

@Component({
    selector: 'my-home',
    templateUrl: 'app/pages/home.component.html',
    directives:[MD_LIST_DIRECTIVES]
})
export class HomeComponent {

}