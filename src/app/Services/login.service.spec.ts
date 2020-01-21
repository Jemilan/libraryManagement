import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MessageService } from './message.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginService', () => {
  beforeEach(() => {
    const httpClient=jasmine.createSpyObj('HttpClient',['get']);

    TestBed.configureTestingModule({
      imports:[RouterTestingModule.withRoutes([
    ])],
    providers:[MessageService,{provide:HttpClient,useValue:httpClient}]
  }
  
  )});


  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
});
