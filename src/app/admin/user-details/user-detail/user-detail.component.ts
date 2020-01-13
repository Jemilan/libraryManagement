import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { UserDetail } from 'src/app/UserDetail';
import { RequestService } from 'src/app/request.service';
import { RequestDetail } from 'src/app/RequestDetail';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit ,OnChanges{
    requestedBooks:RequestDetail[]=null;
    returnedBooks:RequestDetail[]=null;
    bookDetail:RequestDetail[]=null;
    lentedBooks:RequestDetail[]=null;
  isClicked: boolean=false;
  ngOnChanges(changes: SimpleChanges): void {
    this.userDetail=changes.userDetail.currentValue
    this.requestService.getUserNotifications(this.userDetail.userId).subscribe(
      requestDetail=>
      {
        this.bookDetail=null;
        this.requestedBooks=requestDetail["requestedBooks"];
        this.returnedBooks=requestDetail["lentHistory"];
        this.lentedBooks=requestDetail["lentedBooks"];
      });
  }
  private requestDetail:Map<String,RequestDetail[]>=new Map;
  constructor(private requestService:RequestService, private loginService:LoginService) { }
  getRequestedBooks(){
    console.log(this.requestedBooks)
    this.bookDetail=this.requestedBooks.length?this.requestedBooks:null;
  }
  getReturnedBooks(){
    console.log(this.returnedBooks)
    this.bookDetail=this.returnedBooks.length?this.returnedBooks:null;
    console.log(this.bookDetail)
  }
  getLentedBooks(){
    this.bookDetail=this.lentedBooks.length?this.lentedBooks:null;
  }
  toggle(){
    var dropDownContent=document.getElementsByClassName('drop-down')[0]
    console.log(dropDownContent)
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
  @Input()
  userDetail:UserDetail;
}
