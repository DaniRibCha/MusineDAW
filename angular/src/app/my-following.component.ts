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
  templateUrl:'./my-following.component.html',
  styleUrls:['../assets/css/homestyle.css','../assets/css/bootstrap.min.css',
  '../assets/css/animate-custom.css','../assets/css/userJumbotron.css'
  ]
})
export class MyFollowingComponent {
    user:User;
    following:User[];
  

  constructor(private router: Router, activatedRoute: ActivatedRoute, private artistService: ArtistService,
        private userService: UserService,private loginService: LoginService,
        private tagService: TagService) {
    let id_user = activatedRoute.params.subscribe(params => {
         loginService.reqIsLogged();
        this.user=loginService.user;            
        this.following=this.user.following;
    });

  }//constructor

  goToFollowers(id_user:number){
    this.router.navigate(['/my-followers',id_user]);
  }

  goToFollowing(id_user:number){
        this.router.navigate(['/my-following',id_user]);
  }

}
