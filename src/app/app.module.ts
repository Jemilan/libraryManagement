import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {NgxPaginationModule} from 'ngx-pagination'


import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { RegisterComponent } from './register/register.component';
import { ApprovelComponent } from './approvel/approvel.component';
import { LentDeatillComponent } from './lent-deatill/lent-deatill.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBooksComponent,
    AddBookComponent,
    RegisterComponent,
    ApprovelComponent,
    LentDeatillComponent,
    LoginComponentComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    CommonModule,HttpClientModule,
    NgxPaginationModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
