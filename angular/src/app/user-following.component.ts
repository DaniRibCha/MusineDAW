import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import { ArtistService } from './artist.service';
import { LoginService } from './login.service';
import { TagService } from './tag.service';
import {Artist} from './artist.model';
import {Playlist} from './playlist.model';
import {Tag} from './tag.model';
import {User} from './user.model';
import {Song} from './song.model';

@Component({
  templateUrl:'./user-following.component.html',
  styleUrls:['../assets/css/homestyle.css','../assets/css/bootstrap.min.css',
  '../assets/css/animate-custom.css','../assets/css/userJumbotron.css'
  ]
})
export class UserFollowingComponent {
    user:User;
    userLogged:User;
    following:User[];
    followed:boolean;

  constructor(private router: Router, activatedRoute: ActivatedRoute, private artistService: ArtistService,
        private userService: UserService,private loginService: LoginService,
        private tagService: TagService) {
     let id_user = activatedRoute.params.subscribe(params=>{
            this.followed=false;
            this.userLogged=loginService.user;
            this.userService.getUser(params['id_user']).subscribe(
            user=>{
                this.user=user,
                this.following=user.following;
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
