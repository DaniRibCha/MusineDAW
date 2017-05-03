import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SongService } from './song.service';
import { ArtistService } from './artist.service';
import { LoginService } from './login.service';
import { TagService } from './tag.service';
import {Artist} from './artist.model';
import {Playlist} from './playlist.model';
import {Tag} from './tag.model';
import {User} from './user.model';
import {Song} from './song.model';

@Component({
  templateUrl:'./artist-followers.component.html',
  styleUrls:['../assets/css/homestyle.css','../assets/css/bootstrap.min.css',
  '../assets/css/animate-custom.css','../assets/css/userJumbotron.css'
  ]
})
export class ArtistFollowersComponent {
    artist:Artist;
    user:User;
    followers:User[];
  

  constructor(private router: Router, activatedRoute: ActivatedRoute, private artistService: ArtistService,
        private songService: SongService,private loginService: LoginService,
        private tagService: TagService) {
    let id_artist = activatedRoute.params.subscribe(params => {
        this.user=loginService.user;            
        this.artistService.getArtist(params['id_artist']).subscribe(
        artist =>this.artist=artist,
        error =>  console.error(error)
        );
        this.artistService.getArtistFollowers(params['id_artist']).subscribe(
        followers =>this.followers=followers,
        error =>  console.error(error)
        );
    });

  }//constructor

  goToFollowers(id_artist:number){
    this.router.navigate(['/artist-followers',id_artist]);
  }

  

}
