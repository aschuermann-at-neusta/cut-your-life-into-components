import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoboxModule } from '../infobox/infobox.module';
import { LoginBoxModule } from '../login/login-box/login-box.module';
import { LoginModule } from '../login/login.module';
import { StartpageComponent } from './startpage/startpage.component';
import { NavigationModule } from '../navigation/navigation.module';
import { ProfileComponent } from '../profile/profile/profile.component';
import { ProfileModule } from '../profile/profile.module';

@NgModule({
  declarations: [StartpageComponent],
  imports: [
    CommonModule,
    InfoboxModule,
    LoginBoxModule,
    NavigationModule,
    ProfileModule
  ],
  exports: [
    StartpageComponent
  ]
})
export class StartpageModule { }
