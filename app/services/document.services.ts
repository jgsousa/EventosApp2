import {Injectable} from 'angular2/core';
import {Document} from "../model/document";
import {Http, Response, Headers} from 'angular2/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DocumentService {
    constructor(private http: Http) {}

    private _endpointUrl = 'http://localhost:3000/documentos';

    getAllDocumentos() {
        return this.http.get(this._endpointUrl)
            .map(res => <Document[]> res.json())
            .catch(this.handleError);
    }
    getDocumentoForId(id: string) {
        return this.http.get(this._endpointUrl + '/' + id.toString())
            .map(res => <Document> res.json())
            .catch(this.handleError);
    }
    createDocumento(data: Document){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this._endpointUrl + '/create', JSON.stringify(data), {headers:headers})
            .map(res => res.json());
    }

    updateDocumento(id: string, data: Document){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.put(this._endpointUrl + '/' + id, JSON.stringify(data), {headers:headers})
            .map(res => res.json());
    }

    deleteDocumento(id:number){

    }

    getSignedS3Url(file){
        var headers = new Headers();
        headers.append('x-amz-acl', 'public-read');

        return this.http.get(this._endpointUrl + "/sign_s3?file_name="+file.name+"&file_type="+file.type)
            .map( res => res.json() );
    }

    uploadToS3(file, signed_request, data, callback){
        var self = this;
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", signed_request);
        xhr.setRequestHeader('x-amz-acl', 'public-read');
        xhr.onload = function(){
            self.createDocumento(data).subscribe(
              res => {
                  callback(res);
              }
            );
        };
        xhr.onerror = function(err) {
            console.log(err);
            alert("Could not upload file.");
        };
        xhr.send(file);
    }

    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}