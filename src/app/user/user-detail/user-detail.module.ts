import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileDetailModule } from '../../profile/profile-detail/profile-detail.module';
import { UserDetailComponent } from './user-detail.component';

@NgModule({
  declarations: [UserDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProfileDetailModule
  ],
  exports: [
    UserDetailComponent
  ]
})
export class UserDetailModule { }
