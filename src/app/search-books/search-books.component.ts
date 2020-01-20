import { Component, OnInit, ViewChild } from '@angular/core';
import {BookService} from '../book.service'
import { BookDetail } from '../BookDetail';
import { MessageService } from '../message.service';
import { LoginService } from '../login.service';
import { fromEvent } from 'rxjs';
import {map,debounceTime,distinctUntilChanged, switchMap, catchError, retry, filter} from 'rxjs/operators'
import { error } from 'protractor';
import {MatTableDataSource, MatPaginator, MatSnackBar} from '@angular/material'
@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.scss']
})
export class SearchBooksComponent implements OnInit {
  @ViewChild(MatPaginator,{static:true})paginator:MatPaginator
  private bookDetail:BookDetail[];
  private bookName:string='';
  private bookId:number=null;
  rowDetail=["bookId","bookName","bookAuthorName","bookIsbnNumber","Actions","catogory"];
  tableSource: MatTableDataSource<BookDetail>;
  constructor(private snackbar:MatSnackBar,private loginService:LoginService,private bookService :BookService,private messageService:MessageService) { }
  searchBooksByName(){

    if(this.bookName!=""){
      this.bookService.searchBooksByName(this.bookName)
      .subscribe(bookDetail=>{this.bookDetail=bookDetail
        this.tableSource=new MatTableDataSource(this.bookDetail);
        this.tableSource.paginator=this.paginator;

      },error=>{
        this.snackbar.open('The searched book could not be found','',{
          duration:2000
        })
        this.messageService.addError("The searched book could not be found")
      });
    }
    else{
    this.messageService.addError("Enter a proper Detail")
    this.snackbar.open('Enter a proper Detail','',{
      duration:2000
    })
  }
  }
  searchBooksById(){
    if(this.bookId!=null && this.bookId!=NaN){
      this.bookService.searchBookById(this.bookId)
      .subscribe(bookDetail=>{this.bookDetail=bookDetail
        this.tableSource=new MatTableDataSource(this.bookDetail);
        this.tableSource.paginator=this.paginator;

      },
        error=>{
          this.snackbar.open('The searched book could not be found','',{
            duration:2000
          })
        this.messageService.addError("The searched book could not be found")
        });
    }
    else{
      this.snackbar.open('Enter a proper Detail','',{
        duration:2000
      })
    this.messageService.addError("Enter a proper Detail")
  }
  }
  requestBook(bookDetail:BookDetail){

    this.bookService.requestBook(bookDetail)
      .subscribe(message=>{this.messageService.addMessage(message)
      });
    
  }
  ngOnInit() {
    this.messageService.clear();
  }
  ngAfterViewInit(){
    const searchBox=document.getElementById("searchBox");
    fromEvent(searchBox,'keyup').pipe(
      map((e:KeyboardEvent)=>(e.target).value),
      filter(value=>value!==""),
      debounceTime(10),
      distinctUntilChanged(),
      switchMap((input:string)=>{
        return this.bookService.searchBooksByName(input)
      }),
      retry()
      // catchError(this.())
    ).subscribe(response=>{this.bookDetail=response
      this.tableSource=new MatTableDataSource(this.bookDetail);
      this.tableSource.paginator=this.paginator;
    });
  }
  // handleError(): (err: any, caught: import("rxjs").Observable<any>) => import("rxjs").ObservableInput<any> {
    
  //   // throw new Error("Method not implemented.");
  // }
}
