import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SongService } from './song.service';
import { LoginService } from './login.service';
import { UserService } from './user.service';
import {Song} from './song.model';
import {User} from './user.model';


@Component({
  templateUrl:'./my-favorites.component.html',
  styleUrls:['../assets/css/userJumbotron.css','../assets/css/homestyle.css','../assets/css/bootstrap.min.css',
  '../assets/css/animate-custom.css','../assets/css/bootstrap.css','../assets/css/defaultNavbar.css'
  ]
})
export class MyFavoritesComponent {
    user:User;
    songs:Song[];
    constructor(private router: Router, activatedRoute: ActivatedRoute, private songService: SongService,
        private userService: UserService,private loginService: LoginService) {
        activatedRoute.params.subscribe(params=>{
            this.user=this.loginService.user;
            let id_user=this.user.id_user;
            this.userService.getMyFavorites(params['id_user']).subscribe(
            songs=>this.songs=songs,
            error=>console.error(error)
            );
        });

    }
     
    removeFavorite(id_song:number){
        this.songService.removeFavorite(id_song).subscribe(
            songs=>this.songs=songs,
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