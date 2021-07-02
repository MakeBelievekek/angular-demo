import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponentComponent} from './components/main-component/main-component.component';

const routes: Routes = [{
  path: '',
  component: MainComponentComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
