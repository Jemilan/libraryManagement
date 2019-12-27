import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { BookDetail } from '../BookDetail';
import { LoginService } from '../login.service';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lent-deatill',
  templateUrl: './lent-deatill.component.html',
  styleUrls: ['./lent-deatill.component.scss']
})
export class LentDeatillComponent implements OnInit {
  message: string;
  private lentDetails:BookDetail[];
  private lentHistory:BookDetail[];
  constructor(private router:Router,private lendService:RequestService,private loginService:LoginService,private messageService:MessageService) { }
  getLentBooks(){
    this.lendService.lentBooks().subscribe(requestDetail=>this.lentDetails=requestDetail);
  };
  getLentHistory(){
    this.lendService.lentHistory().subscribe(lentHistory=>this.lentHistory=lentHistory);
  }
  returnBook(bookDetail:BookDetail){
    this.lentDetails=this.lentDetails.filter(currentBookDetail=>{
      if(bookDetail!=currentBookDetail)
        return currentBookDetail;
    });
    this.lendService.returnBook(bookDetail)
      .subscribe(message=>this.messageService.addMessage(message));
  }
  ngOnInit() {
    if(!this.loginService.verifyUser()){
      this.router.navigateByUrl("/login")
    }
    else{this.getLentBooks();
    this.getLentHistory()
    this.messageService.clear();
  }}
}
