import {NgModule} from '@angular/core';
import {MoreBasicComponent} from './more-basic/more-basic.component';
import {BasicModule} from '../basic/basic.module';
import {BasicComponent} from '../basic/basic/basic.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    MoreBasicComponent
  ],
  exports: [
    MoreBasicComponent,
    BasicComponent
  ],
  imports: [
    BasicModule,
    CommonModule,
  ]
})
export class MoreBasicModule {
}
