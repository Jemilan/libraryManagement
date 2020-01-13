import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookComponent } from './add-book.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponentComponent } from '../../login-component/login-component.component';
import { MessageService } from '../../message.service';
import { LoginService } from '../../login.service';
import { BookService } from '../../book.service';
import { AppModule } from '../../app.module';

describe('AddBookComponent', () => {
  let component: AddBookComponent;
  let fixture: ComponentFixture<AddBookComponent>;

  beforeEach(async(() => {
    const loginService:Partial<LoginService>={}
    TestBed.configureTestingModule({   
      imports:[AppModule,FormsModule,RouterTestingModule.withRoutes([
      {path:'login',component:LoginComponentComponent}
    ])],
      providers:[MessageService,{provide:LoginService,useValue:loginService},BookService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
