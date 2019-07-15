import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMiniViewComponent } from './user-mini-view.component';

@NgModule({
  declarations: [ UserMiniViewComponent ],
  imports: [
    CommonModule
  ],
  exports: [ UserMiniViewComponent ]
})
export class UserMiniViewModule { }
