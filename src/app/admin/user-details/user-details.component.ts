import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { UserDetail } from 'src/app/UserDetail';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @ViewChild(MatPaginator,{static:true})paginator:MatPaginator;
  userName:string="jemilan";
  userDetail:UserDetail;
  temp;
  constructor(private loginService:LoginService) { }
  userDetails;
  columns=["userId","userName","email","phoneNumber"];
  ngOnInit() {
    this.loginService.getAllUsers().subscribe(userDetail=>{this.temp=userDetail
      this.userDetails=new MatTableDataSource(this.temp);
      this.userDetails.paginator=this.paginator;
    });
  }
  getUser(userDetail:UserDetail){
    this.userDetail=userDetail;  
  }
}
