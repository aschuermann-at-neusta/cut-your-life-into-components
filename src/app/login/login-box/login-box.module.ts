import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMiniViewModule } from '../../user/user-mini-view/user-mini-view.module';
import { LoginFormularModule } from '../login-formular/login-formular.module';
import { LoginBoxComponent } from './login-box.component';
import { LoginBoxViewComponent } from './view/login-box-view.component';

@NgModule({
  declarations: [ LoginBoxComponent, LoginBoxViewComponent ],
  imports: [
    CommonModule,
    LoginFormularModule,
    UserMiniViewModule
  ],
  exports: [ LoginBoxComponent ]
})
export class LoginBoxModule { }
