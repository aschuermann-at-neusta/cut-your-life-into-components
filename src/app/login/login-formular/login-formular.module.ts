import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginFormularComponent } from './login-formular.component';

@NgModule({
  declarations: [ LoginFormularComponent ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ LoginFormularComponent ]
})
export class LoginFormularModule { }
