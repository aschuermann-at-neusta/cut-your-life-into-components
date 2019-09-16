import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileDetailNameModule } from '../profile/profile-detail/profile-detail-name/profile-detail-name.module';
import { UserDetailModule } from './user-detail/user-detail.module';
import { UserRoutingModule } from './user-routing.module';
import { UsersListModule } from './users-list/users-list.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProfileDetailNameModule,
    UsersListModule,
    UserDetailModule,
    UserRoutingModule
  ],
  exports: []
})
export class UserModule { }
