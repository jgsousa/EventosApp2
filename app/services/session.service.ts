import {Injectable} from 'angular2/core';
import {Session} from "../model/session";
import {Http, Response, Headers} from 'angular2/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SessionService {
    constructor(private http: Http) {}

    private _endpointUrl = 'http://localhost:3000/sessoes';

    getAllSessoes() {
        return this.http.get(this._endpointUrl)
            .map(res => <Session[]> res.json())
            .catch(this.handleError);
    }
    getSessaoForId(id: string) {
        return this.http.get(this._endpointUrl + '/' + id.toString())
            .map(res => <Session> res.json())
            .catch(this.handleError);
    }
    createSessao(data: Session){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this._endpointUrl + '/create', JSON.stringify(data), {headers:headers})
            .map(res => res.json());
    }

    updateSessao(id: string, data: Session){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.put(this._endpointUrl + '/' + id, JSON.stringify(data), {headers:headers})
            .map(res => res.json());
    }

    deleteSessao(id:number){

    }

    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}