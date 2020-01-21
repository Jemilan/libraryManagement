import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestDetail } from '../Models/RequestDetail';
import { BookDetail } from '../Models/BookDetail';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  getUserNotifications(userId: number) {
    return this.httpClient.get<Map<String,RequestDetail[]>>(this.const+"getUserDetail?userId="+userId,{headers:this.loginService.authorizationHeader});
  }

  returnBook(bookDetail:BookDetail) {
    return this.httpClient.post<string>(this.const+"returnBook?bookId="+bookDetail.bookId,null,{headers:this.loginService.authorizationHeader});
  }
  rejectReturn(requestId:number) {
    return this.httpClient.post<string>(this.const+"rejectReturn?requestId="+requestId,null,{headers:this.loginService.authorizationHeader});
  }
  acceptReturn(requestId:number) {
    return this.httpClient.post<string>(this.const+"acceptReturn?requestId="+requestId,null,{headers:this.loginService.authorizationHeader});
  }
  rejectRequest(requestId:number) {
    return this.httpClient.post<string>(this.const+"rejectRequest?requestId="+requestId,null,{headers:this.loginService.authorizationHeader});
  }
  acceptRequest(requestId:number) {
    return this.httpClient.post<string>(this.const+"acceptRequest?requestId="+requestId,null,{headers:this.loginService.authorizationHeader});
  }
  lentBooks(){
    console.log(this.loginService.authorizationHeader)
    return this.httpClient.post<BookDetail[]>(this.const+"lentBooks",null,{headers:this.loginService.authorizationHeader});
  }
  lentHistory(){
    return this.httpClient.post<BookDetail[]>(this.const+"lentHistory",null,{headers:this.loginService.authorizationHeader});
  }
  getNotifications() {
  
    return this.httpClient.get<Map<String,RequestDetail[]>>(this.const + "approvel",{headers:this.loginService.authorizationHeader});
  }
  private const="http://localhost:8080/";

  constructor(private httpClient:HttpClient,private loginService:LoginService) { 
  }
}
