import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../request.service';
import { BookDetail } from '../../BookDetail';
import { MessageService } from '../../message.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-lent-deatill',
  templateUrl: './lent-deatill.component.html',
  styleUrls: ['./lent-deatill.component.scss']
})
export class LentDeatillComponent implements OnInit {
  message: string;
  rowDetail=["bookId","bookName","bookAuthorName","bookIsbnNumber","authorCountry","catogory","Actions"];

  private lentDetails:BookDetail[];
  private lentHistory:BookDetail[];
  lentDetail: MatTableDataSource<BookDetail>;
  lentHistoryDetail: MatTableDataSource<BookDetail>;
  constructor(private router:Router,private lendService:RequestService,private messageService:MessageService) { }
  getLentBooks(){
    this.lendService.lentBooks().subscribe(
      requestDetail=>{this.lentDetails= requestDetail;
        this.lentDetail=new MatTableDataSource(this.lentDetails);
      }
      );
  };
  getLentHistory(){
    this.lendService.lentHistory().subscribe(
      lentHistory=>{this.lentHistory=lentHistory
        this.lentHistoryDetail=new MatTableDataSource(this.lentHistory);
      });
  }
  returnBook(bookDetail:BookDetail){
    this.lentDetails=this.lentDetails.filter(currentBookDetail=>{
      if(bookDetail!=currentBookDetail)
        return currentBookDetail;
    });
    this.lendService.returnBook(bookDetail)
      .subscribe(message=>this.messageService.addMessage(message));
  }
  ngOnInit() {this.getLentBooks();
    this.getLentHistory()
    this.messageService.clear();
  }
}
