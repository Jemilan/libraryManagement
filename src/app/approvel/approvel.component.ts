import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import {RequestDetail} from '../RequestDetail'
import { MessageService } from '../message.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approvel',
  templateUrl: './approvel.component.html',
  styleUrls: ['./approvel.component.scss']
})
export class ApprovelComponent implements OnInit {
  p=1;

  constructor(private router:Router,private loginService:LoginService,private lendingService:RequestService,private messageService:MessageService) { }
  private message:string;
  private requestDetail:Map<String,RequestDetail[]>=new Map;
  
  removeRequest(requestId:number){
    for (const property in this.requestDetail) {
       this.requestDetail[property]=this.requestDetail[property].filter(currentBookDetail=>{
        if(requestId!=currentBookDetail.requestId)
         { 
           
            return currentBookDetail;}
      });
    }
  }
  
  acceptRequest(requestId:number){
    this.removeRequest(requestId)
    this.lendingService.acceptRequest(requestId).
      subscribe(message=>this.messageService.addMessage(message));
  }
  rejectRequest(requestId:number){
    this.removeRequest(requestId)
    this.lendingService
      .rejectRequest(requestId).subscribe(message=>this.messageService.addMessage(message));
  }
  acceptReturn(requestId:number){
    this.removeRequest(requestId)
    this.lendingService.acceptReturn(requestId)
      .subscribe(message=>this.messageService.addMessage(message));
  }
  rejectReturn(requestId:number){
    this.removeRequest(requestId)
    this.lendingService.rejectReturn(requestId)
      .subscribe(message=>this.messageService.addMessage(message));
  }
  ngOnInit() {
    if(!this.loginService.verifyAdmin()){
      this.router.navigateByUrl("/login")
    }else{
    this.lendingService.getNotifications()
      .subscribe(requestDetail=>this.requestDetail=requestDetail);
    this.messageService.clear();
  }
  }
}
