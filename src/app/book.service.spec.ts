import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { LoginService } from './login.service';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponentComponent } from './login-component/login-component.component';
import { FormsModule, NgModel } from '@angular/forms';

describe('BookService', () => {
  beforeEach(() => {
    const httpClient=jasmine.createSpyObj('HttpClient',['get']);
    TestBed.configureTestingModule({
    
    declarations:[LoginComponentComponent],
    imports:[FormsModule,RouterTestingModule.withRoutes([
    {path:'login',component:LoginComponentComponent}
  ])],
    providers:[{provide:HttpClient,useValue:httpClient},MessageService,LoginService]
  })});

  it('should be created', () => {
    const service: BookService = TestBed.get(BookService);
    expect(service).toBeTruthy();
  });
});
