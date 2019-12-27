import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { BookDetail } from './BookDetail';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  private const="http://localhost:8080/";
  
  private bookDetail:BookDetail={bookId:0,
    authorCountry:'',
    bookAuthorName:'',
    bookIsbnNumber:null,
    bookName:null,
    catogory:''
}
searchBookById(bookIsbnNumber:number){
  // this.bookDetail.bookName=null;
    this.bookDetail.bookIsbnNumber=bookIsbnNumber;
    return this.httpClient.post<BookDetail[]>(this.const+"search",this.bookDetail);
  }
  searchBooksByName(bookName:string){
    // this.bookDetail.bookId=undefined;
    this.bookDetail.bookName=bookName;
    return this.httpClient.post<BookDetail[]>(this.const+"search",this.bookDetail);
  }
  requestBook(bookDetails: BookDetail) {
    if(!this.loginService.authenticated){    
      this.messageService.addError("Please login and request Book")
      this.router.navigateByUrl("/login")
    }else{
    return this.httpClient.post<string>(this.const+"getBook",bookDetails,{headers:this.loginService.authorizationHeader});
  }
}
  addBook(bookDetail: BookDetail) {
    return this.httpClient.post<string>(this.const+"addBook",bookDetail,{headers:this.loginService.authorizationHeader});
  }
  
  constructor(private httpClient:HttpClient,private loginService:LoginService,private router:Router,private messageService:MessageService) { }
}
