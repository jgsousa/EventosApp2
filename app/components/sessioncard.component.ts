import {Component, Input, EventEmitter, Output} from 'angular2/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {Session} from "../model/session";

@Component({
    selector: 'my-sessioncard',
    templateUrl: 'app/pages/sessioncard.component.html',
    directives: [MD_CARD_DIRECTIVES]
})
export class SessioncardComponent {
    @Input() session: Session;
    @Output() detailRequested : EventEmitter<any> = new EventEmitter();
    @Output() deleteRequested : EventEmitter<any> = new EventEmitter();

    DetailRequested(){
        this.detailRequested.emit({ id: this.session._id });
    }

    DeleteRequested(){
        this.deleteRequested.emit({ id: this.session._id });
    }
}