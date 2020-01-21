import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../Services/request.service';
import {RequestDetail} from '../../Models/RequestDetail'
import { MessageService } from '../../Services/message.service';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';
import {MatTableDataSource, MatSnackBar} from '@angular/material'

@Component({
  selector: 'app-approvel',
  templateUrl: './approvel.component.html',
  styleUrls: ['./approvel.component.scss']
})
export class ApprovelComponent implements OnInit {
  p=1;
  length: number=0;
  rowDetail=["requestId","userId","bookId","bookName","bookAuthorName","bookIsbnNumber","actions"];
 
  
  constructor(private snackbar:MatSnackBar,private router:Router,private lendingService:RequestService,private messageService:MessageService) { }
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
            return currentBookDetail;
          }});
      this.assignValues();
    }
  }
  
  acceptRequest(requestId:number){
    this.lendingService.acceptRequest(requestId).
      subscribe(message=>{
        this.snackbar.open(message,'',{
          duration:2000
        })
        this.messageService.addMessage(message);    
        this.removeRequest(requestId)
      });
  }
  rejectRequest(requestId:number){
    this.lendingService
      .rejectRequest(requestId).subscribe(message=>{
        this.snackbar.open(message,'',{
          duration:2000
        })
        this.messageService.addMessage(message)
        this.removeRequest(requestId)
      });
  }
  acceptReturn(requestId:number){
    this.lendingService.acceptReturn(requestId)
      .subscribe(message=>{
        this.snackbar.open(message,'',{
          duration:2000
        })
        this.messageService.addMessage(message)
        this.removeRequest(requestId)
      });
  }
  rejectReturn(requestId:number){
    this.lendingService.rejectReturn(requestId)
      .subscribe(message=>{
        this.snackbar.open(message,'',{
          duration:2000
        })
        this.messageService.addMessage(message)
    this.removeRequest(requestId)
  });
  }
  getLength(){
    for(var property in this.requestDetail ){
      this.length+=this.requestDetail[property].length;
    }
  }
  assignValues(){
    this.lendDetail=new MatTableDataSource(this.requestDetail.lendDetail);
        this.returnDetail=new MatTableDataSource(this.requestDetail.returnDetail);
        this.delayedReturn=new MatTableDataSource(this.requestDetail.delayedReturn);      
  }
  ngOnInit() {
    this.lendingService.getNotifications()
      .subscribe(requestDetail=>{this.requestDetail=requestDetail;
        this.assignValues();
        this.getLength();
      });
    this.messageService.clear();
  }
}
