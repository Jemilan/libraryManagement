import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { BookDetail } from '../Models/BookDetail';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { MessageService } from './message.service';
import { URLSearchParams } from 'url';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  
  private bookDetail:BookDetail={} as BookDetail;
searchBookById(bookIsbnNumber:number){
    this.bookDetail.bookIsbnNumber=bookIsbnNumber;
    this.bookDetail.bookName=null;
    // const param:URLSearchParams=new URLSearchParams();
    // for (const key in this.bookDetail) {
    //   if (this.bookDetail.hasOwnProperty(key)) {
    //     const element = this.bookDetail[key];
    //     param.set(key,element);
    //   }
    // }
  return this.httpClient.post<BookDetail[]>("search",this.bookDetail);
  }
  searchBooksByName(bookName:string){
    this.bookDetail.bookName=bookName;
    this.bookDetail.bookIsbnNumber=null;
    return this.httpClient.post<BookDetail[]>("search",this.bookDetail);
  }
  requestBook(bookDetails: BookDetail) {
    if(!this.loginService.authenticated){    
      this.messageService.addError("Please login and request Book")
      this.router.navigateByUrl("/login")
    }else{
    return this.httpClient.post<string>("getBook",bookDetails);
  }
}
  addBook(bookDetail: BookDetail) {
    return this.httpClient.post<string>("addBook",bookDetail);
  }
  
  constructor(private httpClient:HttpClient,private loginService:LoginService,private router:Router,private messageService:MessageService) { }
}
