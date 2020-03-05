import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReRoutService implements HttpInterceptor{
  intercept(req:HttpRequest<any>, next: HttpHandler){
    let httpsReq: HttpRequest<any>;
    if(!req.url.startsWith("http://localhost:4200")){
        httpsReq= req.clone({
        url: req.url.replace(req.url, "http://localhost:8080/"+req.url)
      });
    }
      console.log(httpsReq.url)
    return next.handle(httpsReq);
  }

  constructor() { }
}
