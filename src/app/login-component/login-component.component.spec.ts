import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClient} from '@angular/common/http'
import { LoginComponentComponent } from './login-component.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from '../message.service';
import { LoginService } from '../login.service';
import { AppModule } from '../app.module';

describe('LoginComponentComponent', () => {
  let component: LoginComponentComponent;
  let fixture: ComponentFixture<LoginComponentComponent>;

  beforeEach(async(() => {
    const http=jasmine.createSpyObj('HttpClient',['get'])
    TestBed.configureTestingModule({
      declarations: [ LoginComponentComponent ],
    imports:[FormsModule,RouterTestingModule.withRoutes([
    {path:'login',component:LoginComponentComponent}
  ])],
    providers:[MessageService,LoginService,{provide:HttpClient,useValue:http}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
