import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { LoginService } from './Services/login.service';

@Injectable({
  providedIn: 'root'
})
export class XhrInterceptorService 
implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers:this.loginService.authorizationHeader
    });
    return next.handle(xhr);
  }
  constructor(private loginService:LoginService) { }
}
