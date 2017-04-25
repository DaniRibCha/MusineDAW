import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistService } from './playlist.service';
import { LoginService } from './login.service';
import { UserService } from './user.service';
import {Song} from './song.model';
import {User} from './user.model';

@Component({
  templateUrl:'./user-favorites.component.html'
})
export class UserFavoriteComponent {
    user:User;
    songs:Song[];
    profileImage;
    constructor(private router: Router, activatedRoute: ActivatedRoute, private playlistService: PlaylistService,
        private userService: UserService,private loginService: LoginService) {
        let id_user = activatedRoute.params.subscribe(params=>{
            this.userService.getUserFavorites(params['id_user']).subscribe(
            songs=>this.songs=songs,
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