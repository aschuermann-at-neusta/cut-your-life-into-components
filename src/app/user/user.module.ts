import { ProfileModule } from './../profile/profile.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMiniViewComponent } from './user-mini-view/user-mini-view.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersListViewComponent } from './users-list-view/users-list-view.component';
import { UsersListEntryComponent } from './users-list-entry/users-list-entry.component';

@NgModule({
  declarations: [UserMiniViewComponent, UsersListComponent, UsersListViewComponent, UsersListEntryComponent],
  imports: [
    CommonModule,
    ProfileModule
  ],
  exports: [UserMiniViewComponent]
})
export class UserModule { }
