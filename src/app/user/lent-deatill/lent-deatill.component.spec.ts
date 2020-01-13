import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LentDeatillComponent } from './lent-deatill.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponentComponent } from '../../login-component/login-component.component';
import { RequestService } from '../../request.service';
import { MessageService } from '../../message.service';
import { LoginService } from '../../login.service';
import { AppModule } from '../../app.module';

describe('LentDeatillComponent', () => {
  let component: LentDeatillComponent;
  let fixture: ComponentFixture<LentDeatillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({   
    imports:[AppModule,FormsModule,RouterTestingModule.withRoutes([
    {path:'login',component:LoginComponentComponent}
  ])],
    providers:[RequestService,MessageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LentDeatillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
