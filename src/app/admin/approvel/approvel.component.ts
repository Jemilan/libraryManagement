import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../request.service';
import {RequestDetail} from '../../RequestDetail'
import { MessageService } from '../../message.service';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material'

@Component({
  selector: 'app-approvel',
  templateUrl: './approvel.component.html',
  styleUrls: ['./approvel.component.scss']
})
export class ApprovelComponent implements OnInit {
  p=1;
  length: number=0;
  rowDetail=["requestId","userId","bookId","bookName","bookAuthorName","bookIsbnNumber"];
 
  
  constructor(private router:Router,private lendingService:RequestService,private messageService:MessageService) { }
  private message:string;
  private requestDetail
  lendDetail
  returnDetail
  delayedReturn
  
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
    this.lendingService.acceptRequest(requestId).
      subscribe(message=>{this.messageService.addMessage(message);    
        this.removeRequest(requestId)
      });
  }
  rejectRequest(requestId:number){
    this.lendingService
      .rejectRequest(requestId).subscribe(message=>{this.messageService.addMessage(message)
        this.removeRequest(requestId)
      });
  }
  acceptReturn(requestId:number){
    this.lendingService.acceptReturn(requestId)
      .subscribe(message=>{this.messageService.addMessage(message)
        this.removeRequest(requestId)
      });
  }
  rejectReturn(requestId:number){
    this.lendingService.rejectReturn(requestId)
      .subscribe(message=>{this.messageService.addMessage(message)
    this.removeRequest(requestId)
  });
  }
  getLength(){
    for(var property in this.requestDetail ){
      this.length+=this.requestDetail[property].length;
    }
  }
  ngOnInit() {
    this.lendingService.getNotifications()
      .subscribe(requestDetail=>{this.requestDetail=requestDetail;
        this.lendDetail=new MatTableDataSource(this.requestDetail.lendDetail);
        this.returnDetail=new MatTableDataSource(this.requestDetail.returnDetail);
        this.delayedReturn=new MatTableDataSource(this.requestDetail.delayedReturn);
        console.log(this.lendDetail)
        console.log(this.returnDetail)
        this.getLength();
        console.log(this.lendDetail)
      });
    this.messageService.clear();
  }
}
