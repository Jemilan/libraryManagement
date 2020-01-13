import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovelComponent } from './approvel.component';
import { RequestService } from '../../request.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponentComponent } from '../../login-component/login-component.component';
import { MessageService } from '../../message.service';
import { AppModule } from '../../app.module';

describe('ApprovelComponent', () => {
  let component: ApprovelComponent;
  let fixture: ComponentFixture<ApprovelComponent>;

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
    fixture = TestBed.createComponent(ApprovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
