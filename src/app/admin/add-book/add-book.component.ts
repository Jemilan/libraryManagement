import { Component, OnInit } from '@angular/core';
import { BookDetail } from '../../Models/BookDetail';
import { BookService } from '../../Services/book.service';
import { MessageService } from '../../Services/message.service';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  private bookDetail:BookDetail={} as BookDetail;

  private message:string;
  constructor(private snackbar:MatSnackBar,private router:Router,private bookService:BookService,private messageService:MessageService) 
  {
   }
  addBook(){
    this.bookService.addBook(this.bookDetail).
      subscribe(message=>{this.messageService.addMessage(message)
        this.snackbar.open(message,'',{
          duration:2000
        })
      });
    this.bookDetail={} as BookDetail;
  }
  ngOnInit() {
    this.messageService.clear();
  }

}
