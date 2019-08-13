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
        this.url = global.url;
    }

    register(user): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(`${this.url}users/register`, user, {headers});
    }

    login(user): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(`${this.url}users/authenticate`, user, {headers});
    }

}
