import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchBooksComponent} from './search-books/search-books.component'
import { LentDeatillComponent } from './user/lent-deatill/lent-deatill.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { XhrInterceptorService } from './xhr-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddBookComponent } from './admin/add-book/add-book.component';
import { ApprovelComponent } from './admin/approvel/approvel.component';
import { RegisterComponent } from './admin/register/register.component';
import { AtuthGaurdGuard } from './auth/atuth-gaurd.guard';
import { UserDetailsComponent } from './admin/user-details/user-details.component';


const routes: Routes = [{path:'searchBook',component:SearchBooksComponent},
                        {path:'login',component:LoginComponentComponent},
                        {path:'logout',component:AppComponent},
                        {path:'',canActivateChild:[AtuthGaurdGuard],children:[
                          {path:'lentBooks',component:LentDeatillComponent},
                          {path:'admin',children:[
                            {path:'addBook',component:AddBookComponent},
                            {path:'users',component:UserDetailsComponent},
                            {path:'approvel',component:ApprovelComponent},
                            {path:'register',component:RegisterComponent}
                        ]}]},       
                        
                        ];
@NgModule({
  imports: [RouterModule.forRoot(routes)
    ],
  exports: [RouterModule],
  providers:[[XhrInterceptorService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptorService, multi: true }]]
})
export class AppRoutingModule { }
