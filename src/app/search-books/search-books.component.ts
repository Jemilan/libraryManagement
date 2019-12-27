import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service'
import { BookDetail } from '../BookDetail';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.scss']
})
export class SearchBooksComponent implements OnInit {
  private bookDetail:BookDetail[];
  private bookName:string='';
  private bookId:number=null;
  private message:string;
  constructor(private bookService :BookService,private messageService:MessageService) { }
  searchBooksByName(){
    if(this.bookName!=""){
      this.bookId=null;
      this.bookService.searchBooksByName(this.bookName)
      .subscribe(bookDetail=>this.bookDetail=bookDetail,error=>{
        this.messageService.addError("The searched book could not be found")
      });
    }
    else
    this.messageService.addError("Enter a proper Detail")

  }
  searchBooksById(){
    if(this.bookId!=null && this.bookId!=NaN){
      this.bookName="";
      this.bookService.searchBookById(this.bookId)
      .subscribe(bookDetail=>this.bookDetail=bookDetail,
        error=>{
        this.messageService.addError("The searched book could not be found")
        });
    }
    else
    this.messageService.addError("Enter a proper Detail")

  }
  requestBook(bookDetail:BookDetail){

    this.bookService.requestBook(bookDetail)
      .subscribe(message=>{this.messageService.addMessage(message)
      });
    
  }
  ngOnInit() {
    this.messageService.clear();
  }

}
