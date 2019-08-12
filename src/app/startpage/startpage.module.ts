import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoboxModule } from '../infobox/infobox.module';
import { LoginBoxModule } from '../login/login-box/login-box.module';
import { LoginModule } from '../login/login.module';
import { UserDetailModule } from '../user/user-detail/user-detail.module';
import { UsersListModule } from '../user/users-list/users-list.module';
import { StartpageRoutingModule } from './startpage-routing.module';
import { StartpageComponent } from './startpage/startpage.component';
import { NavigationModule } from '../navigation/navigation.module';
import { ProfileComponent } from '../profile/profile/profile.component';
import { ProfileModule } from '../profile/profile.module';

@NgModule({
  declarations: [StartpageComponent],
  bootstrap: [StartpageComponent],
  imports: [
    CommonModule,
    InfoboxModule,
    StartpageRoutingModule
  ],
  exports: [
    StartpageComponent
  ]
})
export class StartpageModule { }
