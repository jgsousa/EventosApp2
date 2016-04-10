import {Component, OnInit, Output, EventEmitter} from 'angular2/core';
import {SidebarItem} from "./SidebarItem";
import {MD_LIST_DIRECTIVES} from '@angular2-material/list'
import { RouterLink } from 'angular2/router';

@Component({
    selector: 'my-sidebar',
    templateUrl: 'app/pages/sidebar.component.html',
    directives:[MD_LIST_DIRECTIVES, RouterLink]
})
export class SidebarComponent implements OnInit{
    @Output() linkClicked : EventEmitter<any> = new EventEmitter();
    Items: Array<SidebarItem>;
    ngOnInit() {
        this.Items = [

            new SidebarItem("Sessões", "/Sessions"),
            new SidebarItem("Oradores", "/Speakers"),
            new SidebarItem("Documentos", "/Documents")
        ];
        this.Items.forEach( item => console.log(item.route));
    }
    CloseMenu(evt) {
        console.log(evt);
        this.linkClicked.emit({});
    }
    
}