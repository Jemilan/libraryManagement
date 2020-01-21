import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBooksComponent } from './search-books.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../Services/message.service';
import { BookService } from '../Services/book.service';

describe('SearchBooksComponent', () => {
  let component: SearchBooksComponent;
  let fixture: ComponentFixture<SearchBooksComponent>;

  beforeEach(async(() => {
    const bookService:Partial<BookService>={};
    TestBed.configureTestingModule({
      imports:[CommonModule,FormsModule],
      declarations: [ SearchBooksComponent ],
      providers:[MessageService,{provide:BookService,useValue:bookService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
