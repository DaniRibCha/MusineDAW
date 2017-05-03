import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ArtistService {
    constructor(private http: Http) { };

    getArtist(id_artist:number){
    let url="http://localhost:4200/api/Artist/"+id_artist;
    console.log(url);
    
    return this.http.get(url).map(
      response => response.json())
      .catch(error =>this.handleError(error))
    }

    getArtistFollowers(id_artist:number){
    let url="http://localhost:4200/api/ArtistFollowers/"+id_artist;
    console.log(url);
    
    return this.http.get(url).map(
      response => response.json())
      .catch(error =>this.handleError(error))
    }

  getTop3Artist(){
    let url="http://localhost:4200/api/Artist/Top3"
    
    return this.http.get(url).map(
      response => response.json())
      .catch(error => Observable.throw('Server error'))
  }


  getArtistByName(key:string){
    let url="http://localhost:4200/api/Artist/SearchByName?key="+key;
    return this.http.get(url).map(
      response => response.json())
      .catch(error =>this.handleError(error))
  }

  removeFollow(id_artist:number){
    let url="http://localhost:4200/api/NotFollowArtist?idArtist="+id_artist;
    return this.http.delete(url).map(
      response => response.json())
      .catch(error =>this.handleError(error))
  }

  addFollow(id_artist:number){
    let url="http://localhost:4200/api/FollowArtist?idArtist="+id_artist;
    const headers = new Headers({
      'Content-Type': 'application/json',
      //'X-Requested-With': 'XMLHttpRequest'
    });
    const options = new RequestOptions({ withCredentials: true,headers});
    return this.http.post(url,options).map(
      response => response.json())
      .catch(error =>this.handleError(error))
  }

  private handleError(error: any) {
        console.error(error);
        return Observable.throw('Server error (' + error.status + '): ' + error.text);
    }
  

}