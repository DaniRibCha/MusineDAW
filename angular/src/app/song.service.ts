import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions,Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class SongService {
    constructor(private http: Http) { };

    getSong(id_song:number){
      let url="http://localhost:4200/api/Song/"+id_song;

    const options = new RequestOptions({ withCredentials: true });
    
    return this.http.get(url,options).map(
      response => response.json())
      .catch(error =>this.handleError(error))
    }

    addFavorite(id_song:number){
    let url="http://localhost:4200/api/Song/AddFavorite?id="+id_song;

    const headers = new Headers({
      'Content-Type': 'application/json',
      //'X-Requested-With': 'XMLHttpRequest'
    });

    const options = new RequestOptions({ withCredentials: true, headers });
    
    return this.http.post(url,options).map(
      response => response.json())
      .catch(error =>this.handleError(error))
    }

    removeFavorite(id_song:number){
    let url="http://localhost:4200/api/Song/DeleteFavorite?id="+id_song;
    console.log(url);
    
    return this.http.delete(url).map(
      response => response.json())
      .catch(error =>this.handleError(error))
    }

    isFavoriteByUser(id_song:number){
        let url="http://localhost:4200/api/Song/isFavoritedByUser?idSong="+id_song;
        console.log(url);
    
        return this.http.get(url).map(
            response =>{} )
            .catch(error =>this.handleError(error))
    }

    private handleError(error: any) {
        console.error(error);
        return Observable.throw('Server error (' + error.status + '): ' + error.text);
    }

}