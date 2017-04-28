import { Component } from '@angular/core';
import { PlaylistService } from './playlist.service';
import { ArtistService } from './artist.service';
import { TagService } from './tag.service';
import { UserService } from './user.service';
import { Http } from '@angular/http';

import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private router: Router, private loginService: LoginService) { }

  logIn(event: any, user: string, pass: string) {

    event.preventDefault();

    this.loginService.logIn(user, pass).subscribe(
      u =>{ console.log(u),
      this.navigate();
      },
      //error => alert('Invalid user or password')
      error=>{console.log(error),
      alert('Invalid user or password')}
    );
  }

  logOut() {
    this.loginService.logOut().subscribe(
      response => { },
      error => console.log('Error when trying to log out: ' + error)
    );
  }
  navigate(){
     this.router.navigate(['/']);
  }

}
