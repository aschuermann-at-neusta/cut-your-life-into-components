import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersListComponent } from './users-list/users-list.component';

const userListRoutes: Routes = [
  { path: '', component: UsersListComponent},
  { path: ':firstname/:lastname', component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(userListRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
