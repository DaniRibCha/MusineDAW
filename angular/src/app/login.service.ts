import { Injectable, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import {User} from './user.model';
import 'rxjs/Rx';

const URL = '/api';


@Injectable()
export class LoginService {

    isLogged = false;
    isAdmin = false;
    user: User;

    constructor(private http: Http,private router: Router) {
        //this.reqIsLogged();
    }

    reqIsLogged() {

        const headers = new Headers({
            'X-Requested-With': 'XMLHttpRequest',
            //'Access-Control-Allow-Origin': '*'
        });

        const options = new RequestOptions({ withCredentials: true});

        this.http.get(URL + '/logIn',options).subscribe(
            response => this.processLogInResponse(response),
            error => {
                if (error.status !== 401) {
                    console.error('Error when asking if logged: ' +
                        JSON.stringify(error));
                }
            }
        );
    }

    private processLogInResponse(response) {
        this.isLogged = true;
        this.user = response.json();
        this.isAdmin = this.user.roles.indexOf('ROLE_ADMIN') !== -1;
    }

    logIn(user: string, pass: string) {
        
        const userPass = user + ':' + pass;

        const headers = new Headers({
            //'Access-Control-Allow-Origin': '*',
            'Authorization': 'Basic ' + utf8_to_b64(userPass),
            'X-Requested-With': 'XMLHttpRequest'
        });

        const options = new RequestOptions({ withCredentials: true, headers });

        return this.http.get(URL + '/logIn', options).map(
            response => {
                this.processLogInResponse(response);
                return this.user;
            }
        );
    }

    logOut() {
        //this.reqIsLogged();
        //return this.http.get('https://localhost:8443/api' + '/logOut', { withCredentials: true}).map(
            return this.http.get(URL + '/logOut', { withCredentials: true}).map(
            response => {
                this.isLogged = false;
                this.isAdmin = false;
                this.user=null;
                return response;
            }
        );
    }
}

function utf8_to_b64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode(<any>'0x' + p1);
    }));
}
