import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list'
import {MatToolbarModule,MatTableModule,MatPaginatorModule,MatSortModule,MatIconModule, MatSnackBarModule} from '@angular/material'


import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MessagesComponent } from './messages/messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { MatBadgeModule } from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  declarations: [
    AppComponent,
    SearchBooksComponent,
    LoginComponentComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,AdminModule,UserModule,
    AppRoutingModule,FormsModule,
    CommonModule,HttpClientModule,
    BrowserAnimationsModule,MatSidenavModule,MatListModule,MatBadgeModule,
    MatInputModule,MatButtonModule,MatTableModule,MatPaginatorModule,
    MatSortModule,MatIconModule,MatToolbarModule,MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
