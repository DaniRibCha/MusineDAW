import { Component,OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import{LoginService} from './login.service'
import{User} from './user.model'
import {DropdownModule} from "ngx-dropdown";

@Component({
  selector: 'MyNavbar',
  templateUrl: './mynavbar.component.html',
  styleUrls:['../assets/css/homestyle.css','../assets/css/bootstrap.min.css',
  '../assets/css/animate-custom.css','../assets/css/bootstrap.css'
  ]
})
export class MyNavbarComponent{ 
  userLogged:User;
  key:string;
  constructor(private router: Router,
    private loginService: LoginService) {
    this.userLogged=loginService.user;
    
     }

     logout(){
         this.loginService.logOut().subscribe(
      response => {console.log(response),
      this.router.navigate(['/']);},
      error => console.error(error)
    )

     }

    search(){
      this.router.navigate(['search/'+this.key]);
    }

    goToConfig(){
      this.router.navigate(['config/'+this.userLogged.id_user]);
    }

    goToMyPlaylists(){
      this.router.navigate(['my-playlists/'+this.userLogged.id_user]);
    }

  
}