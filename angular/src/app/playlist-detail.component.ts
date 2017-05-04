import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistService } from './playlist.service';
import { LoginService } from './login.service';
import { SongService } from './song.service';
import { UserService } from './user.service';
import {Playlist} from './playlist.model';
import {User} from './user.model';
import {Song} from './song.model';

@Component({
  templateUrl:'./playlist-detail.component.html',
  styleUrls:['../assets/css/homestyle.css','../assets/css/bootstrap.min.css'
  ,'../assets/css/animate-custom.css','../assets/css/bootstrap.css'
  ]
})
export class PlaylistDetailComponent {
  playlist:Playlist;
  topPlaylists:Playlist;
  user:User;
  favoriteSongs:Song[];
  likedPlaylists:Playlist[];
  songs:Song[];

  constructor(private router: Router, activatedRoute: ActivatedRoute, private playlistService: PlaylistService,
        private loginService: LoginService,private songService: SongService,private userService:UserService) {
    let id_playlist = activatedRoute.params.subscribe(params=>{
      this.user=loginService.user;
      this.playlistService.getPlaylist(params['id_playlist']).subscribe(
        playlist=>{ 
          this.playlist=playlist,
          this.songs=playlist.songsOfPlaylist;
          this.getFavorites();
          this.getMyLikes();
        },
        error=>console.error(error)
      );
    });
    this.getTopPlaylist();
  }

  getMyLikes(){
    if(this.loginService.isLogged){
      this.userService.getMyLikes(this.user.id_user).subscribe(
            likedPlaylists=>{
              this.likedPlaylists=likedPlaylists,
              this.isLiked(likedPlaylists);
            },
            error=>console.error(error)
      );
    }
  }

  isLiked(likedPlaylists:Playlist[]){
    for (let playlist of likedPlaylists){
      if (playlist.id_playlist===this.playlist.id_playlist) this.playlist.isIdLogged=true;
    }
  }


  getTopPlaylist(){
    this.playlistService.getTop3Playlist().subscribe(
      topPlaylists => this.topPlaylists=topPlaylists,
      error => console.error(error)
    )
  }

  addLike(id_playlist:number){
    this.playlistService.addLike(id_playlist).subscribe(
      likedPlaylists => {
        this.likedPlaylists=likedPlaylists,
        this.isLiked(likedPlaylists);
      },
      error => console.error(error)
    )
  }

  addFavorite(id_song:number){
    this.songService.addFavorite(id_song).subscribe(
      favoriteSongs => {
        this.loginService.reqIsLogged,
        this.favoriteSongs=favoriteSongs,
        this.isFavorite(favoriteSongs);
      },
      error => console.error(error)
    )
  }

  getFavorites(){
    if(this.loginService.isLogged){
      this.userService.getMyFavorites(this.user.id_user).subscribe(
            favoriteSongs=>{
              this.favoriteSongs=favoriteSongs,
              this.isFavorite(favoriteSongs);
            },
            error=>console.error(error)
            );
    }
  }

  isFavorite(favoriteSongs:Song[]){
    if(this.loginService.isLogged){
      for(let song of this.songs){
          for(let favoriteSong of favoriteSongs){
            if (song.id_song===favoriteSong.id_song)
              song.isIdLogged=true;
          }//secondfor
      }//first for
    }
  }

}
