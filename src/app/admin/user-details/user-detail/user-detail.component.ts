import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { UserDetail } from 'src/app/UserDetail';
import { RequestService } from 'src/app/request.service';
import { RequestDetail } from 'src/app/RequestDetail';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit ,OnChanges{
 
  @Input()
  userDetail:UserDetail;
  @ViewChild(MatPaginator,{static:true})paginator:MatPaginator
  
  requestedBooks:RequestDetail[]=null;
    returnedBooks:RequestDetail[]=null;
    bookDetail;
    lentedBooks:RequestDetail[]=null;
  isClicked: boolean=false;
  rowDetail=["bookId","bookName","bookAuthorName","bookIsbnNumber","duoDate","catogory"];

  ngOnChanges(changes: SimpleChanges): void {
    if(this.userDetail){
    this.userDetail=changes.userDetail.currentValue;
    this.requestService.getUserNotifications(this.userDetail.userId).subscribe(
      requestDetail=>
      {
        this.bookDetail=null;
        this.requestedBooks=requestDetail["requestedBooks"];
        this.returnedBooks=requestDetail["lentHistory"];
        this.lentedBooks=requestDetail["lentedBooks"];
      });
    }
  }
  private requestDetail:Map<String,RequestDetail[]>=new Map;
  constructor(private requestService:RequestService, private loginService:LoginService) { }
  getRequestedBooks(){
    this.bookDetail=new MatTableDataSource(this.requestedBooks.length?this.requestedBooks:null);
    this.bookDetail.paginator=this.paginator
  }
  getReturnedBooks(){
    this.bookDetail=new MatTableDataSource(this.returnedBooks.length?this.returnedBooks:null);
    this.bookDetail.paginator=this.paginator
  }
  getLentedBooks(){
    this.bookDetail=new MatTableDataSource(this.lentedBooks.length?this.lentedBooks:null);
    this.bookDetail.paginator=this.paginator
  }
  toggle(){
    var dropDownContent=document.getElementsByClassName('drop-down')[0]
    if(dropDownContent.innerHTML=="show less"){
      dropDownContent.innerHTML="show more"
      this.bookDetail=null;
    }
    else{
      dropDownContent.innerHTML="show less"
    }
    this.isClicked=!this.isClicked;
  }
  ngOnInit() {
  }
}
