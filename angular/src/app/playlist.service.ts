import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import {URLSearchParams} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import{Song} from "./song.model"
import{Playlist} from "./playlist.model"

@Injectable()
export class PlaylistService {
    constructor(private http: Http) { }


//  getPlaylist(id: number | string) {
//    return this.playlists.find(playlist => playlist.id === +id);
//  }

  getPlaylist(id_playlist:number){
    let url="http://localhost:4200/api/Playlist/"+id_playlist;
    console.log(url);
    
    return this.http.get(url).map(
      response => response.json())
      //response => this.extractPlaylist(response))
      .catch(error =>this.handleError(error))
  }

  removePlaylist(id_playlist:number){
    let url="http://localhost:4200/api/DeletePlaylist/"+id_playlist;
    console.log(url);

    const headers = new Headers({
      'Content-Type': 'application/json',
      //'X-Requested-With': 'XMLHttpRequest'
    });

    const options = new RequestOptions({ withCredentials: true, headers });

    
    return this.http.delete(url,options).map(
      response => response.json())
      //response => this.extractPlaylist(response))
      .catch(error =>this.handleError(error))
  }

  addLike(id_playlist:number){
    let url="http://localhost:4200/api/Playlist/Like?idPlaylist="+id_playlist;
    console.log(url);

     const headers = new Headers({
      'Content-Type': 'application/json',
      //'X-Requested-With': 'XMLHttpRequest'
    });

    const options = new RequestOptions({ withCredentials: true, headers });
    
    return this.http.post(url,options).map(
      response => response.json())
      //response => this.extractPlaylist(response))
      .catch(error =>this.handleError(error))
  }

  removeLike(id_playlist:number){
    let url="http://localhost:4200/api/Playlist/NotLike?idPlaylist="+id_playlist;
    console.log(url);
    
    return this.http.delete(url).map(
      response => response.json())
      //response => this.extractPlaylist(response))
      .catch(error =>this.handleError(error))
  }

  getTop3Playlist(){
    let url="http://localhost:4200/api/Playlist/Top3"
    
    return this.http.get(url).map(
      response => response.json())
      //response => this.extractTitles(response))
     .catch(error =>this.handleError(error))
  }

  getPlaylistByTitle(key:string){
    let url="http://localhost:4200/api/Playlist/SearchByTitle?key="+key;
    //var params = new URLSearchParams();
    //params.set('key', title);
    return this.http.get(url).map(
      response => response.json())
      //response => this.extractTitles(response))
      .catch(error =>this.handleError(error))
  }

  getPlaylistByTag(key:string){
    let url="http://localhost:4200/api/Playlist/SearchByTag?key="+key;
    //var params = new URLSearchParams();
    //params.set('key', key);
    return this.http.get(url).map(
      response => response.json())
      //response => this.extractTitles(response))
      .catch(error =>this.handleError(error))
  }


  getWallPlaylistsNotLogged(){
    let url="http://localhost:4200/api/Playlist/WallNotLogged"
    
    return this.http.get(url).map(
      //response => this.extractPlaylists(response))
      response => response.json())
      .catch(error =>this.handleError(error))
  }

  getWallPlaylistsLogged(id_user:number){
    let url="http://localhost:4200/api/Playlist/WallLogged/"+id_user;

    const headers = new Headers({
      'Content-Type': 'application/json',
      //'X-Requested-With': 'XMLHttpRequest'
    });

    const options = new RequestOptions({ withCredentials: true, headers });
    
    return this.http.get(url,options).map(
      //response => this.extractPlaylists(response))
      response => response.json())
      .catch(error =>this.handleError(error))
  }


  changeUserPlaylist(playlist:Playlist,tagToAdd:string,tagToRemove:string){
    let title=playlist.title;
    let description=playlist.description;
    let params='?title='+title+'&description='+description;
    if(tagToAdd!=="") params=params+'&tagToAdd='+tagToAdd;
    if(tagToRemove!=="") params=params+'&tagToRemove='+tagToRemove;
    let url="http://localhost:4200/api/EditPlaylist/"+playlist.id_playlist+params;
    const headers = new Headers({
      'Content-Type': 'application/json',
      //'X-Requested-With': 'XMLHttpRequest'
    });
    const options = new RequestOptions({ withCredentials: true,headers});
    
   return this.http.put(url, options)
        .map(response => response.json())
        .catch(error => this.handleError(error));
  }

  addFavoriteSongToPlaylist(id_playlist:number,id_song:number){
    const params='?favorite='+id_song;
    let url="http://localhost:4200/api/EditPlaylist/"+id_playlist+params;
    const headers = new Headers({
      'Content-Type': 'application/json',
      //'X-Requested-With': 'XMLHttpRequest'
    });
    const options = new RequestOptions({ withCredentials: true,headers});
    
   return this.http.put(url, options)
        .map(response => response.json())
        .catch(error => this.handleError(error));
  }

  addSongToPlaylist(id_playlist:number,title:string,artist:string){
    const params='?titleSong='+title+'&artist='+artist;
    let url="http://localhost:4200/api/EditPlaylist/"+id_playlist+params;
    const headers = new Headers({
      'Content-Type': 'application/json',
      //'X-Requested-With': 'XMLHttpRequest'
    });
    const options = new RequestOptions({ withCredentials: true,headers});
    
   return this.http.put(url, options)
        .map(response => response.json())
        .catch(error => this.handleError(error));
  }

  removeSong(id_playlist:number,id_song:number){
    const params='?songToRemove='+id_song;
    let url="http://localhost:4200/api/EditPlaylist/"+id_playlist+params;
    const headers = new Headers({
      'Content-Type': 'application/json',
      //'X-Requested-With': 'XMLHttpRequest'
    });
    const options = new RequestOptions({ withCredentials: true,headers});
    
   return this.http.put(url, options)
        .map(response => response.json())
        .catch(error => this.handleError(error));
  }

  createPlaylist(playlist:Playlist,id_user:number,description:string,tag:string){
    let params='?tag='+tag;
    if(description!=="") params=params+'&description='+description;
    let url="http://localhost:4200/api/CreatePlaylist/"+id_user+params;
     const body = JSON.stringify(playlist);
    const headers = new Headers({
      'Content-Type': 'application/json',
      //'X-Requested-With': 'XMLHttpRequest'
    });
    const options = new RequestOptions({ withCredentials: true,headers});
    
   return this.http.post(url,body, options)
        .map(response => response.json())
        .catch(error => this.handleError(error));
  }

  private extractTitles(response: Response) {
    return response.json().map( topPlaylists => topPlaylists.title)
  }

   private extractPlaylists(response: Response) {
    return response.json().map( playlists => playlists)
  }


  private handleError(error: any) {
        console.error(error);
        return Observable.throw('Server error (' + error.status + '): ' + error.text);
    }
  

}
