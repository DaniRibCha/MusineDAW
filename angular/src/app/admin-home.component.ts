import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistService } from './playlist.service';
import { LoginService } from './login.service';
import { Artist } from './artist.model';
import { User } from './user.model';
import { AdminService } from './admin.service';

@Component({
    templateUrl:'./admin-home.component.html',
    styleUrls:['../assets/css/homestyle.css','../assets/css/bootstrap.min.css',
    '../assets/css/animate-custom.css','../assets/css/userJumbotron.css'
    ]
    
})

export class AdminHomeComponent {
  user: User;
  artists:Artist[];

  constructor(private router: Router, activatedRoute: ActivatedRoute, private loginService: LoginService,
  private adminService: AdminService) {
        this.user = loginService.user;
        this.getAllArtists();
    }

    getAllArtists(){
    this.adminService.getAllArtists().subscribe(
      artists =>{ this.artists=artists;},
      error => console.error(error)
    )
    }


}
