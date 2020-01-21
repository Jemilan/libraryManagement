import { TestBed } from '@angular/core/testing';

import { RequestService } from './request.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { LoginService } from './login.service';

describe('RequestService', () => {
  beforeEach(() => {
    const httpClient=jasmine.createSpyObj('HttpClient',['get']);
    const loginService:Partial<LoginService>={
      verifyAdmin(){
        if(this.role=="ROLE_Admin"){
          console.log("true")
          return true;
        }  
        else 
        return false;
      }
    }
    TestBed.configureTestingModule({
      providers:[{provide:HttpClient,useValue:httpClient},
        {provide:LoginService,useValue:loginService}]
    })});

  it('should be created', () => {
    const service: RequestService = TestBed.get(RequestService);
    expect(service).toBeTruthy();
  });
});
