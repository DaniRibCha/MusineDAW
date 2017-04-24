import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {URLSearchParams} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import{Song} from "./song.model"

@Injectable()
export class PlaylistService {
    constructor(private http: Http) { }


//  getPlaylist(id: number | string) {
//    return this.playlists.find(playlist => playlist.id === +id);
//  }

  getPlaylist(id_playlist:number){
    let url="https://localhost:8443/api/Playlist/"+id_playlist;
    console.log(url);
    
    return this.http.get(url).map(
      response => response.json())
      //response => this.extractPlaylist(response))
      .catch(error =>this.handleError(error))
  }



  getTop3Playlist(){
    let url="https://localhost:8443/api/Playlist/Top3"
    
    return this.http.get(url).map(
      response => response.json())
      //response => this.extractTitles(response))
     .catch(error =>this.handleError(error))
  }

  getPlaylistByTitle(key:string){
    let url="https://localhost:8443/api/Playlist/SearchByTitle?key="+key;
    //var params = new URLSearchParams();
    //params.set('key', title);
    return this.http.get(url).map(
      response => response.json())
      //response => this.extractTitles(response))
      .catch(error =>this.handleError(error))
  }

  getPlaylistByTag(key:string){
    let url="https://localhost:8443/api/Playlist/SearchByTag?key="+key;
    //var params = new URLSearchParams();
    //params.set('key', key);
    return this.http.get(url).map(
      response => response.json())
      //response => this.extractTitles(response))
      .catch(error =>this.handleError(error))
  }


  getWallPlaylistsNotLogged(){
    let url="https://localhost:8443/api/Playlist/WallNotLogged"
    
    return this.http.get(url).map(
      //response => this.extractPlaylists(response))
      response => response.json())
      .catch(error =>this.handleError(error))
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
