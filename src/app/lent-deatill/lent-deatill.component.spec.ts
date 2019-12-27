import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LentDeatillComponent } from './lent-deatill.component';

describe('LentDeatillComponent', () => {
  let component: LentDeatillComponent;
  let fixture: ComponentFixture<LentDeatillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LentDeatillComponent ]
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
