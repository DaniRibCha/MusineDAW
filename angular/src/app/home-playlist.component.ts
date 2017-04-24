import { Component } from '@angular/core';
import { PlaylistService } from './playlist.service';
import { ArtistService } from './artist.service';
import { TagService } from './tag.service';
import { LoginService } from './login.service';

@Component({
  templateUrl:'./home-playlist.component.html'
})
export class HomeComponent {
  playlists;
  //topPlaylists:Playlist[];
  topPlaylists:string[] = [];
  topArtists:string[]=[];
  topTags:string[]=[];
  login:boolean;

  constructor(private playlistService: PlaylistService,private artistService: ArtistService,
  private tagService: TagService,private loginService: LoginService) {
    this.getTopPlaylist();
    this.getTopArtist();
    this.getTopTag();
    this.login=loginService.isLogged;
    this.getWallPlaylistsNotLogged();
  }

  getTopPlaylist(){
    this.playlistService.getTop3Playlist().subscribe(
      topPlaylists => this.topPlaylists=topPlaylists,
      error => console.error(error)
    )
  }

  getTopArtist(){
    this.artistService.getTop3Artist().subscribe(
      topArtists => this.topArtists=topArtists,
      error => console.error(error)
    )
  }

  getTopTag(){
    this.tagService.getTop3Tag().subscribe(
      topTags => this.topTags=topTags,
      error => console.error(error)
    )
  }
  
  //WallPlaylistsNotLogged:Playlist[];


  getWallPlaylistsNotLogged(){
    this.playlistService.getWallPlaylistsNotLogged().subscribe(
      playlists => this.playlists=playlists,
      error => console.error(error)
    )
  }

  
}
