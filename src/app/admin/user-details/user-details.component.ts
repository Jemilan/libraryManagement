import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { UserDetail } from 'src/app/UserDetail';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userName:string="jemilan";
  userDetail: UserDetail;
  constructor(private loginService:LoginService) { }
  userDetails:UserDetail[];
  ngOnInit() {
    this.loginService.getAllUsers().subscribe(userDetail=>this.userDetails=userDetail);
  }
  getUser(userDetail:UserDetail){
    this.userDetail=userDetail;  
  }
}
