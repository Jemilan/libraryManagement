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
    return this.httpClient.get<Map<String,RequestDetail[]>>("getUserDetail?userId="+userId);
  }

  returnBook(bookDetail:BookDetail) {
    return this.httpClient.post<string>("returnBook?bookId="+bookDetail.bookId,null);
  }
  rejectReturn(requestId:number) {
    return this.httpClient.post<string>("rejectReturn?requestId="+requestId,null);
  }
  acceptReturn(requestId:number) {
    return this.httpClient.post<string>("acceptReturn?requestId="+requestId,null);
  }
  rejectRequest(requestId:number) {
    return this.httpClient.post<string>("rejectRequest?requestId="+requestId,null);
  }
  acceptRequest(requestId:number) {
    return this.httpClient.post<string>("acceptRequest?requestId="+requestId,null);
  }
  lentBooks(){
    console.log(this.loginService.authorizationHeader)
    return this.httpClient.post<BookDetail[]>("lentBooks",null);
  }
  lentHistory(){
    return this.httpClient.post<BookDetail[]>("lentHistory",null);
  }
  getNotifications() {
  
    return this.httpClient.get<Map<String,RequestDetail[]>>("approvel");
  }

  constructor(private httpClient:HttpClient,private loginService:LoginService) { 
  }
}
