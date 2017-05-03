import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {
    private user;
    constructor(private http: Http) { };

    getUserPlaylist(id_user:number){
    let url="http://localhost:4200/api/UserPlaylists/"+id_user;
    console.log(url);
    
    return this.http.get(url).map(
      response => response.json())
      //response => this.extractPlaylist(response))
      .catch(error =>this.handleError(error))
    }

    getMyPlaylist(id_user:number){
    let url="http://localhost:4200/api/MyPlaylists/"+id_user;
    console.log(url);
    const options = new RequestOptions({ withCredentials: true});
    
    return this.http.get(url,options).map(
      response => response.json())
      //response => this.extractPlaylist(response))
      .catch(error =>this.handleError(error))
    }

  getUserLike(id_user:number){
    let url="http://localhost:4200/api/Playlist/UserLikes/"+id_user;
    console.log(url);
    
    return this.http.get(url).map(
      response => response.json())
      //response => this.extractPlaylist(response))
      .catch(error =>this.handleError(error))
  }

  getMyLikes(id_user:number){
    let url="http://localhost:4200/api/Playlist/MyLikes/"+id_user;
    console.log(url);
    const options = new RequestOptions({ withCredentials: true});
    
    return this.http.get(url,options).map(
      response => response.json())
      //response => this.extractPlaylist(response))
      .catch(error =>this.handleError(error))
    }

  getUserFavorites(id_user:number){
    let url="http://localhost:4200/api/UserFavorites/"+id_user;
    console.log(url);
    
    return this.http.get(url).map(
      response => response.json())
      //response => this.extractPlaylist(response))
      .catch(error =>this.handleError(error))
  }

  
  getMyFavorites(id_user:number){
    let url="http://localhost:4200/api/MyFavorites/"+id_user;
    console.log(url);
    const options = new RequestOptions({ withCredentials: true});
    
    return this.http.get(url,options).map(
      response => response.json())
      //response => this.extractPlaylist(response))
      .catch(error =>this.handleError(error))
    }

  getUser(id_user:number){
    let url="http://localhost:4200/api/User/"+id_user;
    console.log(url);
    
    return this.http.get(url).map(
      response => response.json())
      .catch(error =>this.handleError(error))
  }

  getArtistsFollowed(id_user:number){
    let url="http://localhost:4200/api/ArtistFollowedByUser/"+id_user;
    console.log(url);
    
    return this.http.get(url).map(
      response => response.json())
      .catch(error =>this.handleError(error))
  }

   addFollow(id_user:number){
    let url="http://localhost:4200/api/FollowUser/"+id_user;
     //const body = JSON.stringify(playlist);
    const headers = new Headers({
      'Content-Type': 'application/json',
      //'X-Requested-With': 'XMLHttpRequest'
    });
    const options = new RequestOptions({ withCredentials: true,headers});
    
   return this.http.post(url, options)
        .map(response => response.json())
        .catch(error => this.handleError(error));
  }

  removeFollow(id_user:number){
    let url="http://localhost:4200/api/NotFollowUser/"+id_user;
     //const body = JSON.stringify(playlist);
    const headers = new Headers({
      'Content-Type': 'application/json',
      //'X-Requested-With': 'XMLHttpRequest'
    });
    const options = new RequestOptions({ withCredentials: true,headers});
    
   return this.http.delete(url, options)
        .map(response => response.json())
        .catch(error => this.handleError(error));
  }


  private handleError(error: any) {
        console.error(error);
        return Observable.throw('Server error (' + error.status + '): ' + error.text);
    }
}