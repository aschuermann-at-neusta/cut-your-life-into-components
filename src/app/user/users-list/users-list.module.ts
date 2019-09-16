import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileDetailNameModule } from '../../profile/profile-detail/profile-detail-name/profile-detail-name.module';
import { ProfileModule } from '../../profile/profile.module';
import { UsersListEntryComponent } from './users-list-entry/users-list-entry.component';
import { UsersListViewComponent } from './users-list-view/users-list-view.component';
import { UsersListComponent } from './users-list.component';

@NgModule({
  declarations: [UsersListComponent, UsersListViewComponent, UsersListEntryComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProfileModule,
    ProfileDetailNameModule
  ],
  exports: [UsersListComponent]
})
export class UsersListModule { }
