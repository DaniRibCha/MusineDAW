import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistService } from './playlist.service';
import { LoginService } from './login.service';
import {Playlist} from './playlist.model';

@Component({
  templateUrl:'./playlist-detail.component.html',
  styleUrls:['../assets/css/homestyle.css','../assets/css/bootstrap.min.css'
  ,'../assets/css/animate-custom.css','../assets/css/bootstrap.css'
  ]
})
export class PlaylistDetailComponent {
  playlist:Playlist;
  topPlaylists:Playlist;
  visible:boolean;
  login:boolean;

  constructor(private router: Router, activatedRoute: ActivatedRoute, private playlistService: PlaylistService,
        private loginService: LoginService) {
    let id_playlist = activatedRoute.params.subscribe(params=>{
      this.playlistService.getPlaylist(params['id_playlist']).subscribe(
        playlist=>{ this.playlist=playlist;
        this.visible=true},
        error=>console.error(error)
      );
    });
    this.getTopPlaylist();
    this.login=loginService.isLogged;
  }

  getPlaylist(id_playlist:number){
    this.playlistService.getPlaylist(id_playlist).subscribe(
      playlist =>{ this.playlist=playlist;
      this.visible=true},
      error => console.error(error)
    )
  }

  getTopPlaylist(){
    this.playlistService.getTop3Playlist().subscribe(
      topPlaylists => this.topPlaylists=topPlaylists,
      error => console.error(error)
    )
  }

  addLike(id_playlist:number){
    this.playlistService.addLike(id_playlist).subscribe(
      playlists => {},
      error => console.error(error)
    )
  }

}
