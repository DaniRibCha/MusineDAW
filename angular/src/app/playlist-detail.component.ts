import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistService } from './playlist.service';
import { LoginService } from './login.service';
import {Playlist} from './playlist.model';

@Component({
  templateUrl:'./playlist-detail.component.html'
})
export class PlaylistDetailComponent {
  playlist:Playlist;
  topPlaylists:Playlist;
  visible:boolean;
  login:boolean;

  constructor(private router: Router, activatedRoute: ActivatedRoute, private playlistService: PlaylistService,
        private loginService: LoginService) {
    let id_playlist = activatedRoute.snapshot.params['id_playlist'];
    this.getPlaylist(id_playlist);
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

}
