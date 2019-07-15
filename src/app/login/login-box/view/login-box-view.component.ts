import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CredentialsInterface } from '../../credentials.interface';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-box-view.component.html',
  styleUrls: [ './login-box-view.component.scss' ]
})
export class LoginBoxViewComponent {
  @Input() isLoggedIn: boolean;
  @Input() user: string;
  @Output() credentials: EventEmitter<CredentialsInterface> = new EventEmitter<CredentialsInterface>();
  @Output() logout: EventEmitter<boolean> = new EventEmitter();

}
