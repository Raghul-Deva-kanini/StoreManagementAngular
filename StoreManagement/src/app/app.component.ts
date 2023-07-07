import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';

@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularAuthentication';
  roles="";
  isLoggedIn!:boolean;

  username!: string;
  constructor(private authService:AuthService,private login : LoginComponent){
  }
  
  ngOnInit(): void 
  {
    this.username=this.authService.getUsername()??"";  

    console.log(this.username);
  }

  checkLoggedInUser()
  {
    this.isLoggedIn= this.authService.isLoggedIn();
    this.roles=this.authService.getUserRole();
  }
  logout(){
    this.authService.logout();
  }
 
}
