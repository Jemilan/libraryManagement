import { Component, DoCheck} from '@angular/core';
import { LoginService } from './Services/login.service';
import { UserDetail } from './Models/UserDetail';
import {environment}  from '../environments/environment'
import { RequestService } from './Services/request.service';
import { RequestDetail } from './Models/RequestDetail';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
  ngDoCheck(): void {
    if(this.router.url=='/admin/approvel'){
      this.length=0;
    }
    if(this.verifyAdmin()&&  this.flag){
      this.flag=false
      this.lendingService.getNotifications()
      .subscribe(requestDetail=>{this.requestDetail=requestDetail;
        this.getLength();
      });
    }
  }
  flag=true;
  userDetail:UserDetail;
  title = 'libraryManagement';
  requestDetail: Map<String, RequestDetail[]>;
  length: number=0;
  constructor(private router:Router,private route:ActivatedRoute,private loginService:LoginService,private lendingService:RequestService){
    this.loginService.authenticate(undefined);
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
    this.flag=true;
    this.loginService.logout();
  }
  getLength(){
    for(var property in this.requestDetail ){
      // let length:number=0;
      this.length+=this.requestDetail[property].length;
      // this.length=length;
    }
  }
  ngOnInit() {
  }

}
