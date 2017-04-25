import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistService } from './playlist.service';
import { LoginService } from './login.service';
import { UserService } from './user.service';
import {Playlist} from './playlist.model';
import {User} from './user.model';

@Component({
  templateUrl:'./user-likes.component.html'
})
export class UserLikeComponent {
    user:User;
    playlists:Playlist[];
    profileImage;
    constructor(private router: Router, activatedRoute: ActivatedRoute, private playlistService: PlaylistService,
        private userService: UserService,private loginService: LoginService) {
        let id_user = activatedRoute.params.subscribe(params=>{
            this.userService.getUserLike(params['id_user']).subscribe(
            playlists=>this.playlists=playlists,
            error=>console.error(error)
            );
            this.userService.getUser(params['id_user']).subscribe(
            user=>this.user=user,
            error=>console.error(error)
            );
            //this.getProfileImage();
        });

    }
     getProfileImage(){
        this.userService.getProfileImage(this.user.profileImage).subscribe(
            profileImage =>this.profileImage=profileImage,
            error => console.error(error)
    )
     }


}