import { Component} from '@angular/core';
import { LoginService } from './login.service';
import { UserDetail } from './UserDetail';
import {environment}  from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userDetail:UserDetail;
  title = 'libraryManagement';
  constructor(private loginService:LoginService){
    this.loginService.authenticate(undefined);
    console.log(environment.apiUrl);
    console.log(loginService.role)
  }
  authenticated(){
    this.userDetail=this.loginService.userDetail;
    return this.loginService.authenticated;
  }
  verifyAdmin(){
   return this.loginService.verifyAdmin();
  }
  verifyUser(){
    return this.loginService.verifyUser();
  }
  logout(){
    this.loginService.logout();
  }
}
