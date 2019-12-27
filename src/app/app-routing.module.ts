import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchBooksComponent} from './search-books/search-books.component'
import {RegisterComponent} from './register/register.component'
import { AddBookComponent } from './add-book/add-book.component';
import { ApprovelComponent } from './approvel/approvel.component';
import { LentDeatillComponent } from './lent-deatill/lent-deatill.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { XhrInterceptorService } from './xhr-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';


const routes: Routes = [{path:'searchBook',component:SearchBooksComponent},
                          {path:'register',component:RegisterComponent},
                          {path:'addBook',component:AddBookComponent},
                          {path:'approvel',component:ApprovelComponent},
                          {path:'lentBooks',component:LentDeatillComponent},
                          {path:'login',component:LoginComponentComponent},
                          {path:'logout',component:AppComponent}
                        ];
@NgModule({
  imports: [RouterModule.forRoot(routes)
    ],
  exports: [RouterModule],
  providers:[[XhrInterceptorService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptorService, multi: true }]]
})
export class AppRoutingModule { }
