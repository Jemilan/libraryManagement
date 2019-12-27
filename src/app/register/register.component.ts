import { Component, OnInit } from '@angular/core';
import { UserDetail } from '../UserDetail';
import { UserService } from '../user.service';
import { MessageService } from '../message.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private userDetail:UserDetail={} as UserDetail;

  constructor(private router:Router,private loginService:LoginService,private userService:UserService,private messageService:MessageService) { }
  private message:string;
  ngOnInit() {
    if(!this.loginService.verifyAdmin()){
      this.router.navigateByUrl("/login")
    }
    this.messageService.clear();
  }
  register(){
    this.userService.register(this.userDetail).subscribe(message=>this.messageService.addMessage(message));
    this.userDetail={} as UserDetail;
  }
}
