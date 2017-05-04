import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistService } from './playlist.service';
import { LoginService } from './login.service';
import { Artist } from './artist.model';
import { User } from './user.model';
import { AdminService } from './admin.service';

@Component({
    templateUrl:'./admin-create-artist.component.html',
    styleUrls:['../assets/css/homestyle.css','../assets/css/bootstrap.min.css',
    '../assets/css/animate-custom.css','../assets/css/userJumbotron.css'
    ]
    
})

export class AdminCreateArtistComponent {
  user: User;
  artist:Artist;
  
  constructor(private router: Router, activatedRoute: ActivatedRoute, private loginService: LoginService,
  private adminService: AdminService) {
        this.user = loginService.user;
        this.artist={ name: '', country: '' };
    }

    createArtist(event:any, nameArtist:string,countryArtist:string){
        event.preventDefault();
        this.artist.name=nameArtist;
        this.artist.country=countryArtist;
        this.adminService.createArtist(this.artist).subscribe(
            artist =>{ 
                this.artist=artist;
                this.goToEdit(artist.id_artist);
            },
        error => console.error(error)
    )
    }


    goToEdit(id_artist:number){
        this.router.navigate(['/admin-edit-artist',id_artist]);
    }



}
