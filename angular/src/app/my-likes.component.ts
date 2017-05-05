import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistService } from './playlist.service';
import { LoginService } from './login.service';
import { UserService } from './user.service';
import {Playlist} from './playlist.model';
import {User} from './user.model';


@Component({
  templateUrl:'./my-likes.component.html',
  styleUrls:['../assets/css/userJumbotron.css','../assets/css/homestyle.css','../assets/css/bootstrap.min.css',
  '../assets/css/animate-custom.css','../assets/css/bootstrap.css','../assets/css/defaultNavbar.css'
  ]
})
export class MyLikesComponent {
    user:User;
    playlists:Playlist[];
    constructor(private router: Router, activatedRoute: ActivatedRoute, private playlistService: PlaylistService,
        private userService: UserService,private loginService: LoginService) {
        activatedRoute.params.subscribe(params=>{
            loginService.reqIsLogged();
            this.user=this.loginService.user;
            let id_user=this.user.id_user;
            this.userService.getMyLikes(params['id_user']).subscribe(
            playlists=>this.playlists=playlists,
            error=>console.error(error)
            );
        });

    }
     
    removeLike(id_playlist:number){
        this.playlistService.removeLike(id_playlist).subscribe(
            playlists=>this.playlists=playlists,
            error=>console.error(error)
            );
    }

    goToFollowers(id_user:number){
        this.router.navigate(['/my-followers',id_user]);
    }

    goToFollowing(id_user:number){
        this.router.navigate(['/my-following',id_user]);
    }

}