import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoboxModule } from '../infobox/infobox.module';
import { LoginBoxModule } from '../login/login-box/login-box.module';
import { LoginModule } from '../login/login.module';
import { StartpageComponent } from './startpage/startpage.component';

@NgModule({
  declarations: [StartpageComponent],
  imports: [
    CommonModule,
    InfoboxModule,
    LoginBoxModule
  ],
  exports: [
    StartpageComponent
  ]
})
export class StartpageModule { }
