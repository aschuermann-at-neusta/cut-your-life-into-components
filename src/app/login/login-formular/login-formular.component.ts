import { Component, EventEmitter, Output } from '@angular/core';
import { CredentialsInterface } from '../credentials.interface';

@Component({
  selector: 'app-login-formular',
  templateUrl: './login-formular.component.html',
  styleUrls: [ './login-formular.component.scss' ]
})
export class LoginFormularComponent {
  @Output() login: EventEmitter<CredentialsInterface> = new EventEmitter<CredentialsInterface>();
  public username: string;
  public password: string;

  doLogin() {
    this.login.emit({ name: this.username, password: this.password });
  }
}
