import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SongService } from './song.service';
import { ArtistService } from './artist.service';
import { LoginService } from './login.service';
import { TagService } from './tag.service';
import { UserService } from './user.service';
import {Artist} from './artist.model';
import {Playlist} from './playlist.model';
import {Tag} from './tag.model';
import {User} from './user.model';
import {Song} from './song.model';

@Component({
  templateUrl:'./artist-detail.component.html',
  styleUrls:['../assets/css/homestyle.css','../assets/css/bootstrap.min.css',
  '../assets/css/animate-custom.css','../assets/css/userJumbotron.css'
  ]
})
export class ArtistDetailComponent {
  artist:Artist;
  topArtists:Artist[];
  topPlaylists:Playlist[];
  topTags:Tag[];
  user:User;
  songs:Song[];
  favoriteSongs:Song[];
  //followers:User[];

  constructor(private router: Router, activatedRoute: ActivatedRoute, private artistService: ArtistService,
        private songService: SongService,private loginService: LoginService,private userService: UserService,
        private tagService: TagService) {
    let id_artist = activatedRoute.params.subscribe(params => {
      this.user=loginService.user;          
      this.artistService.getArtist(params['id_artist']).subscribe(
      artist =>{
        this.artist=artist,
        this.songs=artist.songsOfArtist;
        this.getFavorites();
        //this.followers=artist.followersOfArtist;
        this.isFollowed(artist.followersOfArtist);
        //this.artistService.getArtistFollowers(params['id_artist']).subscribe(
        // followers =>{
        //    this.followers=followers,
        //    this.isFollowed();
        //  },
        //  error =>  console.error(error)
        //  );
      },
      error =>  console.error(error)
      );
     
      
  });
    this.getTopTag();
    this.getTopArtist();
  }

  getArtist(id_artist:number){
    this.artistService.getArtist(id_artist).subscribe(
      artist =>{ this.artist=artist;},
      error => console.error(error)
    )
  }

 getTopArtist(){
    this.artistService.getTop3Artist().subscribe(
      topArtists => this.topArtists=topArtists,
      error => console.error(error)
    )
  }

  getTopTag(){
    this.tagService.getTop3Tag().subscribe(
      topTags => this.topTags=topTags,
      error => console.error(error)
    )
  }

  addFavorite(id_song:number){
    this.songService.addFavorite(id_song).subscribe(
      favoriteSongs => {
        this.loginService.reqIsLogged,
        this.favoriteSongs=favoriteSongs,
        this.isFavorite();
      },
      error => console.error(error)
    )
  }

  getFavorites(){
    if(this.loginService.isLogged){
      this.userService.getMyFavorites(this.user.id_user).subscribe(
            favoriteSongs=>{
              this.favoriteSongs=favoriteSongs,
              this.isFavorite();
            },
            error=>console.error(error)
            );
    }
  }

  isFavorite(){
    if(this.loginService.isLogged){
      for(let song of this.songs){
          for(let favoriteSong of this.favoriteSongs){
            if (song.id_song===favoriteSong.id_song)
              song.isIdLogged=true;
          }//secondfor
      }//first for
    }
  }

  isFollowed(followers:User[]){
    if(this.loginService.isLogged){
      for(let follower of followers){
        if(follower.id_user===this.user.id_user)
          this.artist.idLogged=true;
      }
    }
  }

  removeFollow(id_artist:number){
      this.artistService.removeFollow(id_artist).subscribe(
      artist => {
        this.artist=artist,
        //this.followers=artist.followersOfArtist,
        this.isFollowed(artist.followersOfArtist);
      },
      error => console.error(error)
    )
  }

   addFollow(id_artist:number){
      this.artistService.addFollow(id_artist).subscribe(
      artist => {
        this.artist=artist,
        //this.followers=artist.followersOfArtist,
        this.isFollowed(artist.followersOfArtist);
      },
      error => console.error(error)
    )
  }

  goToFollowers(id_artist:number){
    this.router.navigate(['/artist-followers',id_artist]);
  }

}
