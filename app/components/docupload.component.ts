import {Component} from 'angular2/core';
import {Document} from '../model/document'
import {Router} from "angular2/router";
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input'
import {DocumentService} from "../services/document.services";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'docupload',
    templateUrl: 'app/pages/docupload.component.html',
    directives: [MD_INPUT_DIRECTIVES]
})

export class DocuploadComponent {
    document : Document;
    model: DocumentViewModel;
    filesToUpload: Array<File>;
    url: string;
    signedUrl: string;
    constructor(
        private _router : Router,
        private _documentService : DocumentService
    ){
        this.filesToUpload = [];
        this.model = new DocumentViewModel();
    }

    Upload() {
        this._documentService.getSignedS3Url(this.filesToUpload[0])
            .subscribe( res => {
                this.url = res.url;
                this.signedUrl = res.signed_request;
                let document = new Document();
                document.descricao = this.model.descricao;
                document.fileUrl = this.url;
                var self = this;
                this._documentService.uploadToS3(this.filesToUpload[0], this.signedUrl, document, function(data){
                    console.log(JSON.stringify(data));
                    self._router.navigate(["Documents"]);
                });
            });
    }

    Cancel() {

    }

    fileChangeEvent(fileInput){
        this.filesToUpload = <Array<File>> fileInput.target.files;
    }

    private makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for(var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    }
}

class DocumentViewModel {
    descricao: string;
    sessaoId: string;
    file: string;
}