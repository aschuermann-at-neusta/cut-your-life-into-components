import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserModule } from '../user/user.module';
import { LoginBoxComponent } from './login-box/login-box.component';
import { LoginFormularComponent } from './login-formular/login-formular.component';

@NgModule({
  declarations: [LoginBoxComponent, LoginBoxComponent, LoginFormularComponent],
  imports: [
    CommonModule,
    UserModule
  ],
  exports: [LoginBoxComponent]
})
export class LoginModule { }
