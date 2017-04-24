import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {
    private userLogged;
    constructor(private http: Http) { };

    login(){
    let url="https://localhost:8443/api/logIn"
    
    return this.http.get(url).map(
      response => this.setUserLogged(response))
      .catch(error => Observable.throw('Server error'))
    }

    private setUserLogged(response: Response) {
        return response.json().map( userLogged => this.userLogged=userLogged)
    }

    private isUserLogged() {
        return this.userLogged!=null;
    }

}