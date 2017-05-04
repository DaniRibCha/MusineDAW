import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistService } from './playlist.service';
import { LoginService } from './login.service';
import { UserService } from './user.service';
import {Playlist} from './playlist.model';
import {User} from './user.model';
import {Tag} from './tag.model';

@Component({
  templateUrl:'./create-playlist.component.html',
  styleUrls:['../assets/css/userJumbotron.css','../assets/css/homestyle.css','../assets/css/bootstrap.min.css',
  '../assets/css/animate-custom.css','../assets/css/bootstrap.css','../assets/css/defaultNavbar.css'
  ]
})
export class CreatePlaylistComponent {
    user:User;
    playlist:Playlist;
    tags:Tag[]=[];
    tag:Tag;
    date:Date;
    constructor(private router: Router, activatedRoute: ActivatedRoute, private playlistService: PlaylistService,
        private userService: UserService,private loginService: LoginService) {
        this.user=loginService.user;    
    }//constructor
     
    createPlaylist(title:string,description:string,tag:string){
        this.tag={id_tag:1,name:tag};
        this.tags.push(this.tag);
        this.date=new Date();
        console.log(this.date);
        this.playlist={ title: title, creatorName:this.user.name,
            creatorId:this.user.id_user};
        this.playlistService.createPlaylist(this.playlist,this.user.id_user,description,tag).subscribe(
            playlist => this.goToEditPlaylist(playlist.id_playlist),
            error => console.error(error)
        )
    }

    goToEditPlaylist(id_playlist:number){
         this.router.navigate(['edit-playlist',id_playlist]);
    }

}