import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  getmessage(): string {
    return this.message;
  }
  message:string="";
  errorMessage:string;
  constructor() { }
  addMessage(message:string){
    this.errorMessage=""
    setTimeout(()=>{
      console.log("clearing"),this.message=""},5000);
    this.message=message;
  }
  addError(message:string){
    this.message=""
    setTimeout(()=>{this.errorMessage=""},5000)
    this.errorMessage=message;
  }
  clear(){
    this.message="";
    this.errorMessage=""
  }
}
