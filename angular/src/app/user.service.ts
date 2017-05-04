import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import {User} from './user.model'

@Injectable()
export class UserService {
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

  createNewUser(user:User){
    let url="http://localhost:4200/api/NewUser";
    const headers = new Headers({
      'Content-Type': 'application/json',
      //'X-Requested-With': 'XMLHttpRequest'
    });
    
   return this.http.post(url,user, headers)
        .map(response => response.json())
        .catch(error => this.handleError(error));
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

  changeData(id_user:number,biography:string,country:string,city:string){
    let params='?biography='+biography+'&country='+country+'&city='+city;
    let url="http://localhost:4200/api/ConfigUserData/"+id_user+params;
    console.log(url);
     const headers = new Headers({
      'Content-Type': 'application/json',
      //'X-Requested-With': 'XMLHttpRequest'
    });
    const options = new RequestOptions({ withCredentials: true,headers});
    
    return this.http.put(url,options).map(
      response => response.json())
      .catch(error =>this.handleError(error))
  }

  changeImage(id_user:number,files){
    let url="http://localhost:4200/api/image/upload/"+id_user;
    let formData = new FormData();
    for (let file of files) {
             formData.append('file', file);
        }
    //console.log(files[0]);
    let headers = new Headers({
        //'Content-Type': 'multipart/form-data'
        //'Accept': 'application/json'
        //'Content-Type': image/jpg
    });
    const options = new RequestOptions({ withCredentials: true,headers});
    headers.delete("Content-Type");
    return this.http.post(url,formData,options).map(
      response => response.json())
      .catch(error =>this.handleError(error))
  }


  private handleError(error: any) {
        console.error(error);
        return Observable.throw('Server error (' + error.status + '): ' + error.text);
    }
}