import { Component } from '@angular/core';
import { PlaylistService } from './playlist.service';
import { ArtistService } from './artist.service';
import { TagService } from './tag.service';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Playlist} from './playlist.model'
import {Artist} from './artist.model'

@Component({
  templateUrl:'./search.component.html'
})
export class SearchComponent {
  tagPlaylists:Playlist[];
  titlePlaylists:Playlist[];
  nameArtists:Artist[];
  key;
  //topPlaylists:Playlist[];
  topPlaylists:string[] = [];
  topArtists:string[]=[];
  topTags:string[]=[];
  login:boolean;

  constructor(private router: Router, activatedRoute: ActivatedRoute,
  private playlistService: PlaylistService,private artistService: ArtistService,
  private tagService: TagService,private loginService: LoginService) {
    this.key=activatedRoute.snapshot.params['key'];
    this.getTopPlaylist();
    this.getTopArtist();
    this.getTopTag();
    this.login=loginService.isLogged;
    this.getPlaylistByTag(this.key);
    this.getPlaylistByTitle(this.key);
    this.getArtistByName(this.key);
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
  
  getPlaylistByTitle(key:string){
    this.playlistService.getPlaylistByTitle(key).subscribe(
      titlePlaylists => this.titlePlaylists=titlePlaylists,
      error => console.error(error)
    )
  }

  getArtistByName(key:string){
    this.artistService.getArtistByName(key).subscribe(
      nameArtists => this.nameArtists=nameArtists,
      error => console.error(error)
    )
  }

  getPlaylistByTag(key:string){
    this.playlistService.getPlaylistByTag(key).subscribe(
      tagPlaylists => this.tagPlaylists=tagPlaylists,
      error => console.error(error)
    )
  }

  
}
