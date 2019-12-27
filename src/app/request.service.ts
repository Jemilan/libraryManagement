import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestDetail } from './RequestDetail';
import { BookDetail } from './BookDetail';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  returnBook(bookDetail:BookDetail) {
    return this.httpClient.get<string>(this.const+"returnBook?bookId="+bookDetail.bookId,{headers:this.loginService.authorizationHeader});
  }
  rejectReturn(requestId:number) {
    return this.httpClient.get<string>(this.const+"rejectReturn?requestId="+requestId,{headers:this.loginService.authorizationHeader});
  }
  acceptReturn(requestId:number) {
    return this.httpClient.get<string>(this.const+"acceptReturn?requestId="+requestId,{headers:this.loginService.authorizationHeader});
  }
  rejectRequest(requestId:number) {
    return this.httpClient.get<string>(this.const+"rejectRequest?requestId="+requestId,{headers:this.loginService.authorizationHeader});
  }
  acceptRequest(requestId:number) {
    return this.httpClient.get<string>(this.const+"acceptRequest?requestId="+requestId,{headers:this.loginService.authorizationHeader});
  }
  lentBooks(){
    console.log(this.loginService.authorizationHeader)
    return this.httpClient.get<BookDetail[]>(this.const+"lentBooks",{headers:this.loginService.authorizationHeader});
  }
  lentHistory(){
    return this.httpClient.get<BookDetail[]>(this.const+"lentHistory",{headers:this.loginService.authorizationHeader});
  }
  getNotifications() {
  
    return this.httpClient.post<Map<String,RequestDetail[]>>(this.const + "approvel", null,{headers:this.loginService.authorizationHeader});
  }
  private const="http://localhost:8080/";

  constructor(private httpClient:HttpClient,private loginService:LoginService) { 
  }
}
