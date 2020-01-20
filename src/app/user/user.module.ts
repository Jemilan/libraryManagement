import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LentDeatillComponent } from './lent-deatill/lent-deatill.component';
import {MatButtonModule} from '@angular/material/button'
import {MatTableModule, MatSnackBarModule} from '@angular/material'



@NgModule({
  declarations: [LentDeatillComponent],
  imports: [
    CommonModule,MatButtonModule,MatTableModule,MatSnackBarModule
  ]
})
export class UserModule { }
