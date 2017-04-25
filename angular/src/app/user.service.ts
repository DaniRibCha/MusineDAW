import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {
    private user;
    constructor(private http: Http) { };

    getUserPlaylist(id_user:number){
    let url="https://localhost:8443/api/UserPlaylists/"+id_user;
    console.log(url);
    
    return this.http.get(url).map(
      response => response.json())
      //response => this.extractPlaylist(response))
      .catch(error =>this.handleError(error))
  }

  getUserLike(id_user:number){
    let url="https://localhost:8443/api/Playlist/UserLikes/"+id_user;
    console.log(url);
    
    return this.http.get(url).map(
      response => response.json())
      //response => this.extractPlaylist(response))
      .catch(error =>this.handleError(error))
  }

  getUserFavorites(id_user:number){
    let url="https://localhost:8443/api/UserFavorites/"+id_user;
    console.log(url);
    
    return this.http.get(url).map(
      response => response.json())
      //response => this.extractPlaylist(response))
      .catch(error =>this.handleError(error))
  }

  getUser(id_user:number){
    let url="https://localhost:8443/api/User/"+id_user;
    console.log(url);
    
    return this.http.get(url).map(
      response => response.json())
      //response => this.extractPlaylist(response))
      .catch(error =>this.handleError(error))
  }

  getProfileImage(profileImage:string){
    let url="https://localhost:8443/api/image/"+profileImage;
    console.log(url);
    
    return this.http.get(url).map(
      response => response.json())
      //response => this.extractPlaylist(response))
      .catch(error =>this.handleError(error))
  }

  private handleError(error: any) {
        console.error(error);
        return Observable.throw('Server error (' + error.status + '): ' + error.text);
    }
}