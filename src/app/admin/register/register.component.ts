import { Component, OnInit } from '@angular/core';
import { UserDetail } from '../../UserDetail';
import { MessageService } from '../../message.service';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private userDetail:UserDetail={} as UserDetail;

  constructor(private router:Router,private loginService:LoginService,private messageService:MessageService) { }
  private message:string;
  ngOnInit() {
    this.messageService.clear();
  }
  register(){
    this.loginService.register(this.userDetail).subscribe(
      message=>this.messageService.addMessage(message),
      error=>{this.messageService.errorMessage=error.error.message;console.log(error)}
      );
  }
}
