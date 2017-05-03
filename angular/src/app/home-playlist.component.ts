import { Component } from '@angular/core';
import { PlaylistService } from './playlist.service';
import { ArtistService } from './artist.service';
import { TagService } from './tag.service';
import { LoginService } from './login.service';
import { UserService } from './user.service';
import { User } from './user.model';
import { Artist } from './artist.model';
import { Playlist } from './playlist.model';

@Component({
  templateUrl:'./home-playlist.component.html',
  styleUrls:['../assets/css/homestyle.css','../assets/css/bootstrap.min.css','../assets/css/animate-custom.css',
  ]
})
export class HomeComponent {
  playlists:Playlist[];
  //topPlaylists:Playlist[];
  topPlaylists:string[] = [];
  topArtists:string[]=[];
  topTags:string[]=[];
  artistsFollowed:Artist[];
  user:User;
  login:boolean;
  admin:boolean;

  constructor(private playlistService: PlaylistService,private artistService: ArtistService,
  private tagService: TagService,private loginService: LoginService,private userService: UserService) {
    this.admin=loginService.isAdmin;
    if(!this.admin){
      this.getTopPlaylist();
      this.getTopArtist();
      this.getTopTag();
      this.user=loginService.user;
      this.login=loginService.isLogged;
      if(this.login===true){
        this.getWallPlaylistsLogged();
        this.getArtistsFollowed();
      }else{
        this.getWallPlaylistsNotLogged();
      }
    }
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
  

  getWallPlaylistsNotLogged(){
    this.playlistService.getWallPlaylistsNotLogged().subscribe(
      playlists => this.playlists=playlists,
      error => console.error(error)
    )
  }

  getWallPlaylistsLogged(){
    this.playlistService.getWallPlaylistsLogged(this.user.id_user).subscribe(
      playlists => this.playlists=playlists,
      error => console.error(error)
    )
  }

  getArtistsFollowed(){
    this.userService.getArtistsFollowed(this.user.id_user).subscribe(
      artistsFollowed => this.artistsFollowed=artistsFollowed,
      error => console.error(error)
    )
  }

  
}
