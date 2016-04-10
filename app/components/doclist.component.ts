import {Component, OnInit} from 'angular2/core';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {Document} from '../model/document';
import {DocumentService} from "../services/document.services";
import {Router} from "angular2/router";
import {MdAnchor, MdButton} from '@angular2-material/button'
import {MD_CARD_DIRECTIVES} from '@angular2-material/card'

@Component({
    selector: 'my-doclist',
    templateUrl: 'app/pages/doclist.component.html',
    directives: [MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES, MdButton]
})
export class DoclistComponent implements OnInit {
    documents: Array<Document>;
    constructor(
        private _documentService : DocumentService,
        private _router : Router
    ){};

    ngOnInit(){
        this._documentService.getAllDocumentos()
            .subscribe( res => this.documents = res );
    }

    OpenRequested(url){
        location.href = url;
    }

    DeleteRequested(){

    }

    OnCreate() {
        this._router.navigate( ['DocumentUpload']);
    }
}