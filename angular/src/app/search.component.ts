import { Component } from '@angular/core';
import { PlaylistService } from './playlist.service';
import { UserService } from './user.service';
import { TagService } from './tag.service';
import { LoginService } from './login.service';
import { ArtistService } from './artist.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Playlist} from './playlist.model'
import {User} from './user.model'

@Component({
  templateUrl:'./search.component.html',
  styleUrls:['../assets/css/homestyle.css','../assets/css/bootstrap.min.css',
  '../assets/css/animate-custom.css','../assets/css/bootstrap.css'
  ]
})
export class SearchComponent {
  tagPlaylists:Playlist[];
  titlePlaylists:Playlist[];
  key;
  topArtists:string[]=[];
  topPlaylists:string[] = [];
  topTags:string[]=[];
  login:boolean;
  userByName:User;

  constructor(private router: Router, activatedRoute: ActivatedRoute,
  private playlistService: PlaylistService,private artistService:ArtistService,
  private tagService: TagService,private userService: UserService,
  private loginService: LoginService) {
    
    let key = activatedRoute.params.subscribe(params=>{
      this.tagPlaylists=[];
     this.titlePlaylists=[];

      this.playlistService.getPlaylistByTag(params['key']).subscribe(
      tagPlaylists => {this.tagPlaylists=tagPlaylists,
      this.key=activatedRoute.snapshot.params['key'];},
      error => console.error(error)
    )

     this.playlistService.getPlaylistByTitle(params['key']).subscribe(
      titlePlaylists => {this.titlePlaylists=titlePlaylists,
      this.key=activatedRoute.snapshot.params['key'];},
      error => console.error(error)
    )

      this.userService.getUserByName(params['key']).subscribe(
        user=> {this.userByName=user},
        error=>console.log(error)
      )
    });
    this.getTopPlaylist();
    this.getTopArtist();
    this.getTopTag();
    this.login=loginService.isLogged;
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
  
 
  
}
