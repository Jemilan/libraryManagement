import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserDetail } from './UserDetail';
import { Router, RouterLinkActive } from '@angular/router';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  getUser(currentValue: string) {
    return this.httpClient.get<UserDetail>(this.const+"getUser?userName="+currentValue,{headers:this.authorizationHeader});
  }
  getAllUsers() {
    return this.httpClient.get<UserDetail[]>(this.const+"getAll",{headers:this.authorizationHeader})
  }
  logout() {
    this.role="";
    this.authenticated=false;
    this.authorizationHeader=undefined;
    this.messageService.clear();
    this.userDetail=undefined;
  }
  verifyUser() {
    if(this.role=="ROLE_user")
      return true;
    return false;
  }
  userDetail:UserDetail;
  authenticated:Boolean=false;
  response: Object;
  role:string;  
  authorizationHeader:HttpHeaders;
  constructor(private httpClient:HttpClient,private router :Router,private messageService:MessageService) { }
  private const="http://localhost:8080/";

  authenticateCredentials(credentials){
    
    this.authorizationHeader=new HttpHeaders(credentials?{
      'Authorization' : 'Basic ' + btoa(credentials.username + ':' + credentials.password),
      'X-Requested-With': 'XMLHttpRequest' // to suppress 401 browser popup
      } : {});
    return this.httpClient.post(this.const+"user",null,{headers:this.authorizationHeader});
  }
  authenticate(credentials){
    console.log(credentials)
    this.authenticateCredentials(credentials).subscribe(response=>{ 
      if(response){
      if(response['principal'])
        {
          this.authenticated=true;
          this.userDetail=response['principal']['userDetail'];
          this.role=response['authorities'][0]['authority'];
          this.messageService.clear();
          this.router.navigateByUrl("/");
        }  
    }
  },error=>{
    if(error.status=="401"){
      this.messageService.addError("Invalid Credentials");
      setTimeout(this.messageService.clear,5000)
    }
  });
  }
  verifyAdmin(){
    if(this.role=="ROLE_Admin"){
      return true;
    }  
    else 
    return false;
  }
  register(registerDetail: UserDetail) {
    return this.httpClient.post<string>(this.const+"register",registerDetail);
  }

}

