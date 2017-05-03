import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistService } from './playlist.service';
import { LoginService } from './login.service';
import { UserService } from './user.service';
import {Playlist} from './playlist.model';
import {User} from './user.model';


@Component({
  templateUrl:'./user-playlist.component.html',
  styleUrls:['../assets/css/userJumbotron.css','../assets/css/homestyle.css','../assets/css/bootstrap.min.css',
  '../assets/css/animate-custom.css','../assets/css/bootstrap.css','../assets/css/defaultNavbar.css'
  ]
})
export class UserPlaylistComponent {
    user:User;
    playlists:Playlist[];
    followed:boolean;
    userLogged:User;
    constructor(private router: Router, activatedRoute: ActivatedRoute, private playlistService: PlaylistService,
        private userService: UserService,private loginService: LoginService) {
        let id_user = activatedRoute.params.subscribe(params=>{
            this.followed=false;
            this.userLogged=this.loginService.user;
            this.userService.getUserPlaylist(params['id_user']).subscribe(
            playlists=>this.playlists=playlists,
            error=>console.error(error)
            );
            this.userService.getUser(params['id_user']).subscribe(
            user=>{
                this.user=user,
                this.isFollowedByUserLogged();
            },
            error=>console.error(error)
            );
        });

    }//constructor
     
    goToFollowers(id_user:number){
        this.router.navigate(['/user-followers',id_user]);
    }
    
    goToFollowing(id_user:number){
        this.router.navigate(['/user-following',id_user]);
    }

    isFollowedByUserLogged(){
        let following:User[];
        if(this.userLogged){
            following=this.userLogged.following;
            for(let follow of following){
                if(follow.id_user===this.user.id_user){
                    this.followed=true;
                }
            }
        }
    }

    addFollow(id_user:number){
        this.userService.addFollow(id_user).subscribe(
            userLogged=>{
                this.userLogged=userLogged,
                this.followed=true;
                this.loginService.reqIsLogged();
            },
            error=>console.error(error)
            );
    }

    removeFollow(id_user:number){
        this.userService.removeFollow(id_user).subscribe(
            userLogged=>{
                this.userLogged=userLogged,
                this.followed=false;
                this.loginService.reqIsLogged();
            },
            error=>console.error(error)
            );
    }


}