import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import {Artist} from './artist.model'
import {Song} from './song.model'


@Injectable()
export class AdminService {
    constructor(private http: Http) { };

    getAllArtists(){
    let url="http://localhost:4200/api/AdminArtists";
    const options = new RequestOptions({ withCredentials: true});
    return this.http.get(url,options).map(
      response => response.json())
      .catch(error =>this.handleError(error))
  }

  createArtist(artist:Artist){
    let url="http://localhost:4200/api/AdminCreateArtist";
    const options = new RequestOptions({ withCredentials: true});
    return this.http.post(url,artist,options).map(
      response => response.json())
      .catch(error =>this.handleError(error))
  }

  editTagArtist(name:string,tagToRemove:string,tagToAdd:string){
    let params="?";
    if(tagToRemove!==""){
        params=params+"tagToRemove="+tagToRemove;
    }
    if(tagToAdd!==""){
        params=params+"tagToAdd="+tagToAdd;
    }
    let url="http://localhost:4200/api/AdminEditArtist/"+name+params;
    console.log(url);
    const options = new RequestOptions({ withCredentials: true});
    return this.http.put(url,options).map(
      response => response.json())
      .catch(error =>this.handleError(error))
  }

  editArtist(name:string,newName:string,newCountry:string){
    let params="?newName="+newName+"&country="+newCountry;
    let url="http://localhost:4200/api/AdminEditArtist/"+name+params;
    console.log(url);
    const options = new RequestOptions({ withCredentials: true});
    return this.http.put(url,options).map(
      response => response.json())
      .catch(error =>this.handleError(error))
  }

  editSong(id_song:number,title:string,link:string){
      let params="?title="+title+"&link_youtube="+link;
    let url="http://localhost:4200/api/AdminEditSong/"+id_song+params;
    console.log(url);
    const options = new RequestOptions({ withCredentials: true});
    return this.http.put(url,options).map(
      response => response.json())
      .catch(error =>this.handleError(error))
  }

  editArtistSong(id_song:number,artistToRemove:string,artistToAdd:string){
    let params="?";
    let url;
    const options = new RequestOptions({ withCredentials: true});
    if(artistToRemove!==""){
        params=params+"nameArtist="+artistToRemove;
        url="http://localhost:4200/api/AdminRemoveArtistBySong/"+id_song+params;
        return this.http.delete(url,options).map(
        response => response.json())
        .catch(error =>this.handleError(error))
    }
    if(artistToAdd!==""){
        params=params+"nameArtist="+artistToAdd;
        url="http://localhost:4200/api/AdminAddArtistInSong/"+id_song+params;
        return this.http.post(url,options).map(
        response => response.json())
        .catch(error =>this.handleError(error))
    }
    console.log(url);
  }

  createSong(id_artist:number,song:Song){
        let url="http://localhost:4200/api/AdminCreateSongOfArtist/"+id_artist;
        const options = new RequestOptions({ withCredentials: true});
        return this.http.post(url,song,options).map(
        response => response.json())
        .catch(error =>this.handleError(error))
  }

  private handleError(error: any) {
        console.error(error);
        return Observable.throw('Server error (' + error.status + '): ' + error.text);
    }

}