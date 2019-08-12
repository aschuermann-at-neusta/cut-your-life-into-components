import { ProfileDetailNameModule } from '../profile/profile-detail/profile-detail-name/profile-detail-name.module';
import { ProfileModule } from './../profile/profile.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMiniViewComponent } from './user-mini-view/user-mini-view.component';
import { UsersListEntryComponent } from './users-list/users-list-entry/users-list-entry.component';
import { UsersListViewComponent } from './users-list/users-list-view/users-list-view.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [UserMiniViewComponent, UsersListComponent, UsersListViewComponent, UsersListEntryComponent, UserDetailComponent],
  imports: [
    CommonModule,
    ProfileDetailNameModule
  ],
  exports: [UserMiniViewComponent]
})
export class UserModule { }
