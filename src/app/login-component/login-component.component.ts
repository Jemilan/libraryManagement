import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { UserDetail } from '../Models/UserDetail';
import { MessageService } from '../Services/message.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
  authenticated=false;
  private credentials:UserDetail={} as UserDetail;
  constructor(private loginService:LoginService,private messageService:MessageService) { }
  login(){
    this.loginService.authenticate(this.credentials);
  }
  ngOnInit() {
    this.messageService.clear();
  }

}

