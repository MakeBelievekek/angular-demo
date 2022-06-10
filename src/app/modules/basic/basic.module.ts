import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic/basic.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    BasicComponent
  ],
  exports: [
    BasicComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ]
})
export class BasicModule { }
