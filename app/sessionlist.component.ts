import {Component, OnInit} from 'angular2/core';
import {Session} from "./model/session";
import {SessionService} from "./services/session.service";
import {MD_LIST_DIRECTIVES} from "@angular2-material/list";
import {SessioncardComponent} from './components/sessioncard.component';
import {MdButton} from "@angular2-material/button"
import {Router} from 'angular2/router';

@Component({
    selector: 'my-sessionlist',
    templateUrl: 'app/pages/sessionlist.component.html',
    directives: [MD_LIST_DIRECTIVES, SessioncardComponent, MdButton]
})
export class SessionlistComponent implements OnInit{
    sessions: Array<Session>;
    error: string;
    constructor(
        private _sessionService: SessionService,
        private _router: Router) {
    }
    ngOnInit(){
        this._sessionService.getAllSessoes()
            .subscribe(
                sessions => {
                    this.sessions = sessions;
                    console.log(this.sessions);
                });
    }
    OnCreate(){
        console.log("clicked");
        this._router.navigate( ['SessionCreate']);
    }

    NavigateDetail(evt){
        console.log(JSON.stringify(evt));
        this._router.navigate(["SessionEdit", { id: evt.id} ])
    }
}