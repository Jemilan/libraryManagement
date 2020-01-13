import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LentDeatillComponent } from './lent-deatill/lent-deatill.component';
import {MatButtonModule} from '@angular/material/button'
import {MatTableModule} from '@angular/material'



@NgModule({
  declarations: [LentDeatillComponent],
  imports: [
    CommonModule,MatButtonModule,MatTableModule
  ]
})
export class UserModule { }
