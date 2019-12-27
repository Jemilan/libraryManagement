import { Injectable } from '@angular/core';
import {UserDetail} from './UserDetail'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private const="http://localhost:8080/";

  register(userDetail: UserDetail) {
    console.log("Helo");
    return this.httpClient.post<string>(this.const+"register",userDetail);
  }

  constructor(private httpClient:HttpClient) { }
}
