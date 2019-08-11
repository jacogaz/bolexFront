import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global'; // URL DE LA API

@Injectable()
export class UserService {
    public url: string;
    // public identity;
    // public token;

    constructor(
        public _http: HttpClient
    ) {
        this.url = global;
    }

    register(user): Observable<any>{
        let json = JSON.stringify(user);
         let params = `json={$json}`;

         let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(`{$this.url}register`, params, {headers:headers});
    }

    login(user): Observable<any>{
        let json = JSON.stringify(user);
        let params = `json={$json}`;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(`{$this.url}login`, params, {headers:headers});
    }

}