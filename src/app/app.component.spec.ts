import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { LoginService } from './login.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    const loginService:Partial<LoginService>={
      authenticate(){
        this.authenticated=true;
      }
    }
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,MessagesComponent
      ],
      providers:[{provide:LoginService,useValue:loginService}]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'libraryManagement'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('libraryManagement');
  });

});
