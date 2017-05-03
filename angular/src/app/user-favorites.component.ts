import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistService } from './playlist.service';
import { LoginService } from './login.service';
import { UserService } from './user.service';
import {Song} from './song.model';
import {User} from './user.model';

@Component({
  templateUrl:'./user-favorites.component.html',
   styleUrls:['../assets/css/userJumbotron.css','../assets/css/homestyle.css','../assets/css/bootstrap.min.css',
  '../assets/css/animate-custom.css','../assets/css/bootstrap.css','../assets/css/defaultNavbar.css'
  ]
})
export class UserFavoriteComponent {
    user:User;
    userLogged:User;
    songs:Song[];
    followed:boolean;
    constructor(private router: Router, activatedRoute: ActivatedRoute, private playlistService: PlaylistService,
        private userService: UserService,private loginService: LoginService) {
        let id_user = activatedRoute.params.subscribe(params=>{
            this.userLogged=loginService.user;
            this.followed=false;
            this.userService.getUserFavorites(params['id_user']).subscribe(
            songs=>this.songs=songs,
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

    }

    goToFollowers(id_user:number){
        this.router.navigate(['/user-followers',id_user]);
    }
    
    goToFollowing(id_user:number){
        this.router.navigate(['/user-following',id_user]);
    }

    isFollowedByUserLogged(){
        let userLogged:User;
        let following:User[];
        userLogged=this.loginService.user;
        if(userLogged){
            following=userLogged.following;
            for(let follow of following){
                if(follow.id_user===this.user.id_user){
                    this.followed=true;
                }
            }
        }else{
            this.followed=true;
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