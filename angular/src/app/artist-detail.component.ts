import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistService } from './playlist.service';
import { ArtistService } from './artist.service';
import { LoginService } from './login.service';
import { TagService } from './tag.service';
import {Artist} from './artist.model';
import {Playlist} from './playlist.model';
import {Tag} from './tag.model';

@Component({
  templateUrl:'./artist-detail.component.html'
})
export class ArtistDetailComponent {
  artist:Artist;
  topArtists:Artist[];
  topPlaylists:Playlist[];
  topTags:Tag[];
  visible:boolean;
  login:boolean;

  constructor(private router: Router, activatedRoute: ActivatedRoute, private artistService: ArtistService,
        private playlistService: PlaylistService,private loginService: LoginService,
        private tagService: TagService) {
    let id_artist = activatedRoute.snapshot.params['id_artist'];
    //this.getTopArtist();
    //this.getTopTag();
    //this.getArtist(id_artist);
    this.login=loginService.isLogged;
  }

  getArtist(id_artist:number){
    this.artistService.getArtist(id_artist).subscribe(
      artist =>{ this.artist=artist;
      this.visible=true},
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

}
