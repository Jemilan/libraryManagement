import { Component, OnInit } from '@angular/core';
import { BookDetail } from '../../BookDetail';
import { BookService } from '../../book.service';
import { MessageService } from '../../message.service';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  private bookDetail:BookDetail={} as BookDetail;

  private message:string;
  constructor(private router:Router,private bookService:BookService,private messageService:MessageService) 
  {
   }
  addBook(){
    this.bookService.addBook(this.bookDetail).
      subscribe(message=>this.messageService.addMessage(message));
    this.bookDetail={} as BookDetail;
  }
  ngOnInit() {
    this.messageService.clear();
  }

}
