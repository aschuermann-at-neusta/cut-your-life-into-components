import { Component } from '@angular/core';
import { CredentialsInterface } from '../credentials.interface';
import { LoginService } from '../login-api/login.service';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: [ './login-box.component.scss' ]
})
export class LoginBoxComponent {
  doLogin(credentials: CredentialsInterface) {
    this.loginApi.login(credentials.name, credentials.password);
  }

  constructor(public loginApi: LoginService) {
  }

  doLogout() {
    this.loginApi.logout();
  }
}
