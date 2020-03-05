import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../Services/login.service';


@Injectable({
  providedIn: 'root'
})
export class AtuthGaurdGuard implements CanActivateChild {
  constructor(private loginService:LoginService,private router:Router){}
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.verify();
  }
  verify():boolean{
    if(!this.loginService.authenticated){
      console.log(true)
      this.router.navigateByUrl('/')
    }
    else
      return true;
  }
}
