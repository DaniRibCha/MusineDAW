import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import{LoginService} from './login.service'
import{User} from './user.model'

@Component({
  selector: 'MyNavbar',
  templateUrl: './mynavbar.component.html',
  styleUrls:['css/homestyle.css']
})
export class MyNavbarComponent { 
  userLogged:User;
  constructor(private router: Router,
    private loginService: LoginService) {
    this.userLogged=loginService.user;

     }

     logout(){
         this.loginService.logOut().subscribe(
      response => console.log(response),
      error => console.error(error)
    )

     }

  
}