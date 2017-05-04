import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistService } from './playlist.service';
import { LoginService } from './login.service';
import { Artist } from './artist.model';
import { User } from './user.model';
import { AdminService } from './admin.service';
import { ArtistService } from './artist.service';

@Component({
    templateUrl:'./admin-edit-artist.component.html',
    styleUrls:['../assets/css/homestyle.css','../assets/css/bootstrap.min.css',
    '../assets/css/animate-custom.css','../assets/css/userJumbotron.css'
    ]
    
})

export class AdminEditArtistComponent {
  user: User;
  artist:Artist;
  
  constructor(private router: Router, activatedRoute: ActivatedRoute, private loginService: LoginService,
  private adminService: AdminService,private artistService:ArtistService) {
        this.user = loginService.user;
        let id_artist = activatedRoute.params.subscribe(params => {       
            this.artistService.getArtist(params['id_artist']).subscribe(
                artist =>{
                this.artist=artist;
            },
                error =>  console.error(error)
            );
        });
  }

    editTag(event:any,tagToRemove:string,tagToAdd:string){
        event.preventDefault();
        this.adminService.editTagArtist(this.artist.name,tagToRemove,tagToAdd).subscribe(
            artist =>{ 
                this.artist=artist;
            },
        error => console.error(error)
    )
    }

    editArtist(event:any,name:string,country:string){
        event.preventDefault();
        this.adminService.editArtist(this.artist.name,name,country).subscribe(
            artist =>{ 
                this.artist=artist;
            },
        error => console.error(error)
    )
    }


    goToCreateSong(id_artist:number){
        this.router.navigate(['/admin-create-song',id_artist]);
    }

}
