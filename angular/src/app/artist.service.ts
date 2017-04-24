import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ArtistService {
    constructor(private http: Http) { };

    getArtist(id_artist:number){
    let url="https://localhost:8443/api/Artist/"+id_artist;
    console.log(url);
    
    return this.http.get(url).map(
      response => response.json())
      .catch(error =>this.handleError(error))
  }

  getTop3Artist(){
    let url="https://localhost:8443/api/Artist/Top3"
    
    return this.http.get(url).map(
      response => response.json())
      .catch(error => Observable.throw('Server error'))
  }


  getArtistByName(key:string){
    let url="https://localhost:8443/api/Artist/SearchByName?key="+key;
    return this.http.get(url).map(
      response => response.json())
      .catch(error =>this.handleError(error))
  }

  private handleError(error: any) {
        console.error(error);
        return Observable.throw('Server error (' + error.status + '): ' + error.text);
    }
  

}