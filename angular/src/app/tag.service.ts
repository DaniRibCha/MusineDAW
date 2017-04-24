import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class TagService {
    constructor(private http: Http) { };

  getTop3Tag(){
    let url="https://localhost:8443/api/Tag/Top3"
    
    return this.http.get(url).map(
      //response => this.extractNames(response))
      response => response.json())
      .catch(error => Observable.throw('Server error'))
  }


  private extractNames(response: Response) {
    return response.json().map( topTags => topTags.name)
  }

}