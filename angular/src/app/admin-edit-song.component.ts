import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistService } from './playlist.service';
import { LoginService } from './login.service';
import { Song } from './song.model';
import { User } from './user.model';
import { Artist } from './artist.model';
import { AdminService } from './admin.service';
import { SongService } from './song.service';

@Component({
    templateUrl:'./admin-edit-song.component.html',
    styleUrls:['../assets/css/homestyle.css','../assets/css/bootstrap.min.css',
    '../assets/css/animate-custom.css','../assets/css/userJumbotron.css'
    ]
    
})

export class AdminEditSongComponent {
  user: User;
  song:Song;
  artists:Artist[];
  
  constructor(private router: Router, activatedRoute: ActivatedRoute, private loginService: LoginService,
  private adminService: AdminService,private songService:SongService) {
        this.user = loginService.user;
        let id_song = activatedRoute.params.subscribe(params => {       
            this.songService.getSong(params['id_song']).subscribe(
                song =>{
                this.song=song;
                this.artists=song.artistsOfSong;
            },
                error =>  console.error(error)
            );
        });
  }

    editSong(event:any,title:string,link:string){
        event.preventDefault();
        this.adminService.editSong(this.song.id_song,title,link).subscribe(
            song =>{ 
                this.song=song;
            },
        error => console.error(error)
        )
    }

    editArtistSong(event:any,artistToRemove:string,artistToAdd:string){
        event.preventDefault();
        this.adminService.editArtistSong(this.song.id_song,artistToRemove,artistToAdd).subscribe(
            song =>{ 
                this.song=song;
                this.artists=song.artistsOfSong;
            },
        error => console.error(error)
        )
    }

    goToAdminHome(){
        this.router.navigate(['/admin-home']);
    }




}
