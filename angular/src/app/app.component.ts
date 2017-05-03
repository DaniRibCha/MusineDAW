import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import{LoginService} from './login.service'
import{User} from './user.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['../assets/css/homestyle.css','../assets/css/bootstrap.min.css','../assets/css/animate-custom.css',
  ]
})
export class AppComponent { 
  userLogged:User;
  constructor(private router: Router,
    private loginService: LoginService) {
    this.userLogged=loginService.user;

     }

  
  
}
