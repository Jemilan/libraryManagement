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
  // content=new Observable(observer=>{
  //   setInterval(()=>observer.next(this.getmessage()),10000);
  // }
  // );
  constructor() { }
  addMessage(message:string){
    this.message=message;
    setTimeout(this.clear,10000);
  }
  addError(message:string){
    this.errorMessage=message;
    setTimeout(this.clear,500)
  }
  clear(){
    this.message="";
    this.errorMessage=""
  }
}
