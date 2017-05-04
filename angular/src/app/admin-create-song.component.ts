import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtistService } from './artist.service';
import { LoginService } from './login.service';
import { Artist } from './artist.model';
import { User } from './user.model';
import { Song } from './song.model';
import { AdminService } from './admin.service';

@Component({
    templateUrl:'./admin-create-song.component.html',
    styleUrls:['../assets/css/homestyle.css','../assets/css/bootstrap.min.css',
    '../assets/css/animate-custom.css','../assets/css/userJumbotron.css'
    ]
    
})

export class AdminCreateSongComponent {
  user: User;
  artist:Artist;
  song:Song;
  
  constructor(private router: Router, activatedRoute: ActivatedRoute, private loginService: LoginService,
  private adminService: AdminService,private artistService:ArtistService) {
        this.user = loginService.user;
        this.song={ title: '', link_youtube: ''};
        let id_artist = activatedRoute.params.subscribe(params => {       
            this.artistService.getArtist(params['id_artist']).subscribe(
                artist =>{
                this.artist=artist;
            },
                error =>  console.error(error)
            );
        });
    }

    createSong(event:any, title:string,link:string){
        event.preventDefault();
        this.song.title=title;
        this.song.link_youtube=link;
        this.adminService.createSong(this.artist.id_artist,this.song).subscribe(
            song =>{ 
                this.song=song;
                this.goToEditSong(song.id_song);
            },
        error => console.error(error)
    )
    }

    goToEditSong(id_song:number){
        this.router.navigate(['/admin-edit-song',id_song]);
    }

    goToAdminHome(id_artist:number){
        this.router.navigate(['/admin-home']);
    }



}
