import {Component, OnInit, Output, EventEmitter} from 'angular2/core';
import {RouteParams, Router} from "angular2/router";
import {SessionService} from "../services/session.service";
import {MD_INPUT_DIRECTIVES} from "@angular2-material/input";
import {MdButton} from "@angular2-material/button";
import {MD_CARD_DIRECTIVES} from "@angular2-material/card";
import {Session} from "../model/session";

@Component({
    selector: 'my-sessionform',
    templateUrl: 'app/pages/sessionform.component.html',
    styleUrls:['app/styles/session.css'],
    directives: [MD_INPUT_DIRECTIVES, MD_CARD_DIRECTIVES, MdButton]
})
export class SessionformComponent implements OnInit{
    session: Session;
    model: SessionViewModel;
    @Output() FormSaved : EventEmitter<any> = new EventEmitter();
    @Output() FormCanceled : EventEmitter<any> = new EventEmitter();
    constructor(
        private _sessionService: SessionService,
        private _routeParams: RouteParams,
        private _router: Router) {
    }
    ngOnInit(){

        let id = this._routeParams.get('id');

        if(id){
            this.model = new SessionViewModel(new Session());
            this._sessionService.getSessaoForId(id).subscribe( res => {
                console.log(JSON.stringify((res)));
                this.session = res;
                this.model = new SessionViewModel(res);
            });
        }
        else{
            console.log("novo");
            this.session = new Session();
            this.model = new SessionViewModel(this.session);
        }
    }
    Save() {
        console.log(JSON.stringify(this.model));
        this.model.toModel(this.session);
        let id = this._routeParams.get('id');

        if(id){
            this._sessionService.updateSessao(id, this.session)
                .subscribe(
                    res =>  {
                        this.session._id = res._id;
                        this.FormSaved.emit({});
                        this._router.navigate(["Sessions"]);
                    }
                );
        }
        else{
            this._sessionService.createSessao(this.session)
                .subscribe(
                    res =>  {
                        this.session._id = res._id;
                        this.FormSaved.emit({});
                        this._router.navigate(["Sessions"]);
                    }
                );
        }
    }
    Cancel() {
        this.FormCanceled.emit({});
    }
}

class SessionViewModel {
    nome: string;
    data: string;
    horaInicio: string;
    horaFim:string;
    descricao:string;

    constructor(session : Session) {

        let date = new Date(session.dataInicio);
        var yyyy = date.getFullYear().toString();
        var mm = (date.getMonth()+1).toString(); // getMonth() is zero-based
        var dd  = date.getDate().toString();
        var HH = date.getHours().toString();
        var MM = date.getMinutes().toString();

        this.nome = session.nome;
        this.data = yyyy + (mm[1]?"-"+mm:"-0"+mm[0]) + (dd[1]?"-"+dd:"-0"+dd[0]);
        this.horaInicio = (HH[1]?HH:"0"+HH[0]) + (MM[1]?":"+MM:":0"+MM[0]);
        this.horaFim = (HH[1]?HH:"0"+HH[0]) + (MM[1]?":"+MM:":0"+MM[0]);
        this.descricao = session.descricao;
    }

    toModel(session: Session){
        let x = new Date(this.data + 'T' + this.horaFim + ":00");
        let y = new Date(this.data + 'T' + this.horaFim + ":00");
        session.nome = this.nome;
        session.dataInicio = x.toISOString();
        session.dataFim = y.toISOString();
        session.descricao = this.descricao;
    }
}