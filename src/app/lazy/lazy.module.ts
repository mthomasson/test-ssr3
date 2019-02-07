import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { LazyViewComponent } from './lazy-view/lazy-view.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [LazyViewComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: LazyViewComponent, pathMatch: 'full'}
    ])
  ]
})
export class LazyModule {

}
