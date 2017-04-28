import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import{LoginService} from './login.service'
import{User} from './user.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['css/homestyle.css']
})
export class AppComponent { 
  key:string;
  userLogged:User;
  constructor(private router: Router,
    private loginService: LoginService) {
    this.userLogged=loginService.user;

     }

  search(){
    this.router.navigate(['search/'+this.key]);
  }
  
}
