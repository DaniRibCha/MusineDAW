import { Component,OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import{LoginService} from './login.service';
import{User} from './user.model';
import{UserService} from './user.service'

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls:['../assets/css/homestyle.css','../assets/css/bootstrap.min.css','../assets/css/animate-custom.css',
    '../assets/css/loginstyle.css','../assets/css/styleLogInSignUp.css',]
})
export class SignInComponent{ 
    user:User;
  constructor(private router: Router,
    private loginService: LoginService,private userService:UserService) {
        this.user={name:"",country:"",passwordHash:"",email:"",roles:["ROLE_USER"]};
     }

     signIn(event:any,username:string,email:string,password:string){
        event.preventDefault();
        this.user.name=username;
        this.user.email=email;
        this.user.passwordHash=password;
        this.userService.createNewUser(this.user).subscribe(
            user => {
                console.log(user);
                this.goToLogin();
        },
            error => console.error(error)
        )
     }

     goToLogin(){
         this.router.navigate(['login']);
     }

  
}