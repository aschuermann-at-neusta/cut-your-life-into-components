import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private user: Subject<string> = new Subject<string>();
  public user$: Observable<string> = this.user.asObservable();
  public isLoggedIn$: Observable<boolean> = this.user$.pipe(map(user => user !== null));

  login(user: string, password: string): void {
    console.log('login-service', user);
    this.user.next(user);
  }

  logout(): void {
    this.user.next(null);
  }

}
