import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: './start', pathMatch: 'full' },
  { path: 'start', loadChildren: () => import('./startpage/startpage.module').then(mod => mod.StartpageModule ) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule) },
  { path: 'users', loadChildren: () => import('./user/user.module').then(mod => mod.UserModule ) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule ) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
