import { BookDetail } from './BookDetail';
import { UserDetail } from './UserDetail';

export class RequestDetail{
    requestId:number;
    bookDetail:BookDetail;
    DuoDate:Date;
    lendStatus:string;
    returnStatus:number;
    userDetail:UserDetail;    
}