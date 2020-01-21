import { Component, OnInit } from '@angular/core';
import { UserDetail } from '../../Models/UserDetail';
import { MessageService } from '../../Services/message.service';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private userDetail:UserDetail={} as UserDetail;

  constructor(private snackbar:MatSnackBar,private router:Router,private loginService:LoginService,private messageService:MessageService) { }
  private message:string;
  ngOnInit() {
    this.messageService.clear();
  }
  register(){
    this.loginService.register(this.userDetail).subscribe(
      message=>{this.messageService.addMessage(message)
        this.snackbar.open(message,'',{
          duration:2000
        })
      },
      error=>{
        this.snackbar.open(error.error.message,'',{
          duration:2000
        })
        this.messageService.errorMessage=error.error.message;
        }
      );
  }
}
