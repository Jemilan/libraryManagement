import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ApprovelComponent } from './approvel/approvel.component';
import {AddBookComponent} from './add-book/add-book.component'
import { RegisterComponent } from './register/register.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import {MatRippleModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge'
import {MatTableModule, MatSnackBarModule, MatInputModule, MatPaginatorModule} from '@angular/material'
import { UserDetailComponent } from './user-details/user-detail/user-detail.component';


@NgModule({
  declarations: [UserDetailsComponent,ApprovelComponent,AddBookComponent,RegisterComponent,
  UserDetailComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxPaginationModule,
    FormsModule,MatRippleModule,MatMenuModule,MatSidenavModule,MatButtonModule,
    MatButtonToggleModule,MatExpansionModule,MatBadgeModule,MatTableModule,
    MatSnackBarModule,MatButtonModule,MatInputModule,MatPaginatorModule
  ]
})
export class AdminModule { }
