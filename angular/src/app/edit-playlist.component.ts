import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistService } from './playlist.service';
import { LoginService } from './login.service';
import { UserService } from './user.service';
import {Song} from './song.model';
import {Playlist} from './playlist.model';
import {User} from './user.model';
import {Tag} from './tag.model';

@Component({
  templateUrl:'./edit-playlist.component.html',
  styleUrls:['../assets/css/userJumbotron.css','../assets/css/homestyle.css','../assets/css/bootstrap.min.css',
  '../assets/css/animate-custom.css','../assets/css/bootstrap.css','../assets/css/defaultNavbar.css'
  ]
})
export class EditPlaylistComponent {
    user:User;
    songs:Song[];
    favoriteSongs:Song[];    
    playlist:Playlist;
    tags:Tag[];
    constructor(private router: Router, activatedRoute: ActivatedRoute, private playlistService: PlaylistService,
        private userService: UserService,private loginService: LoginService) {
        let id_playlist = activatedRoute.params.subscribe(params => { 
            this.user=loginService.user;    
            this.playlistService.getPlaylist(params['id_playlist']).subscribe(
            playlist =>{
                if(playlist.creatorId==this.user.id_user){
                 this.playlist=playlist;
                 this.songs=this.playlist.songsOfPlaylist;
                 this.tags=this.playlist.tagsOfPlaylist;
                 }
            },
            error =>  console.error(error)
            );

            let id_user=this.user.id_user;
            this.userService.getUserFavorites(id_user).subscribe(
            favoriteSongs=>this.favoriteSongs=favoriteSongs,
            error=>console.error(error)
            );
        });

    }//constructor
     

  changeUserPlaylist(event: any, title: string, description: string,
    tagToRemove: string, tagToAdd: string) {
    event.preventDefault();
    console.log("Title: "+title);
    console.log("Description: "+description);
    console.log("TagToRemove: "+tagToRemove);
    console.log("TagToAdd: "+tagToAdd);
    if(title!=="") this.playlist.title=title;
    if(description!=="")this.playlist.description=description;
    //if(tagToAdd===this.tagToAddWritten) tagToAdd="";
    //if(tagToRemove===this.tagToRemoveWritten) tagToRemove="";
    this.playlistService.changeUserPlaylist(this.playlist,tagToAdd,tagToRemove).subscribe(
      playlist => {
        this.playlist=playlist,
        this.tags=playlist.tagsOfPlaylist;
      },
      error => console.error(error)
    )
  }

  addFavoriteSongToPlaylist(event: any,id_song:number){
    event.preventDefault();
    this.playlistService.addFavoriteSongToPlaylist(this.playlist.id_playlist,id_song).subscribe(
      playlist => {
        this.playlist=playlist,
        this.songs=playlist.songsOfPlaylist;
      },
      error => console.error(error)
    )
  }

  addSong(event: any,title:string,artist:string){
    console.log(title);
    console.log(artist);
    event.preventDefault();
    this.playlistService.addSongToPlaylist(this.playlist.id_playlist,title,artist).subscribe(
      playlist => {
        this.playlist=playlist,
        this.songs=playlist.songsOfPlaylist;
      },
      error => console.error(error)
    )
  }

  removeSong(event: any,id_song:number){
    event.preventDefault();
    this.playlistService.removeSong(this.playlist.id_playlist,id_song).subscribe(
      playlist => {
        this.playlist=playlist,
        this.songs=playlist.songsOfPlaylist;
      },
      error => console.error(error)
    )
  }
}