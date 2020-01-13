import { TestBed, async, inject } from '@angular/core/testing';

import { AtuthGaurdGuard } from './atuth-gaurd.guard';
import { LoginService } from '../login.service';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponentComponent } from '../login-component/login-component.component';
import { AppModule } from '../app.module';

describe('AtuthGaurdGuard', () => {
  beforeEach(() => {
    const loginService:Partial<LoginService>={}

    TestBed.configureTestingModule({
      imports:[AppModule,RouterTestingModule.withRoutes([{path:'login',component:LoginComponentComponent}])],
      providers: [AtuthGaurdGuard,{provide:LoginService,useValue:loginService}]
    });
  });

  it('should ...', inject([AtuthGaurdGuard], (guard: AtuthGaurdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
