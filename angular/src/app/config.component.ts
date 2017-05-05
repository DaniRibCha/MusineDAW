import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistService } from './playlist.service';
import { LoginService } from './login.service';
import { Playlist } from './playlist.model';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
    templateUrl:'./config.component.html',
    styleUrls:['../assets/css/homestyle.css','../assets/css/bootstrap.min.css',
    '../assets/css/animate-custom.css','../assets/css/userJumbotron.css'
    ]
    
})

export class ConfigComponent {
  userLogged: User;

  constructor(private router: Router, activatedRoute: ActivatedRoute, private loginService: LoginService,
  private userService: UserService) {
    //this.userLogged = loginService.user;
     let id_user = activatedRoute.params.subscribe(params => { 
       if(loginService.isLogged){
          this.userService.getUser(params['id_user']).subscribe(
            user => {this.userLogged=user},
            error =>  console.error(error)
          );
        }
    });
}

changeData(biography: string, country: string, city: string){
    this.userLogged.city=city;
    this.userLogged.biography=biography;
    this.userLogged.country=country;

    this.userService.changeData(this.userLogged.id_user,biography,country,city).subscribe(
      user =>{
        this.userLogged=user,
        this.loginService.reqIsLogged();
      },
      error => console.error(error)
    )
  }

  changeImage(event:any){
      let files = event.target.files;
      console.log(files);
      this.userService.changeImage(this.userLogged.id_user,files).subscribe(
            user => {
              this.userLogged=user;
              this.loginService.reqIsLogged();
              this.router.navigate(['/config',this.userLogged.id_user]);
            },
            error =>  console.error(error)
          );
  }


}
