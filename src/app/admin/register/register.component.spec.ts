import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../message.service';
import { LoginService } from '../../login.service';
import { LoginComponentComponent } from '../../login-component/login-component.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '../../app.module';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
      imports:[AppModule,FormsModule,RouterTestingModule.withRoutes([
        {path:'login',component:LoginComponentComponent}
      ])],
        providers:[MessageService]
    
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
