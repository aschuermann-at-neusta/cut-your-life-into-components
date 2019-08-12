import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { NavigationEntryInterface } from '../navigation-entry-interface';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private location: ReplaySubject<NavigationEntryInterface> = new ReplaySubject<NavigationEntryInterface>(1);
  location$: Observable<NavigationEntryInterface> = this.location.asObservable();
  navigationEntrys: NavigationEntryInterface[] = [
    {title: 'Startpage', path: 'start'},
    {title: 'Profile', path: 'profile'},
    {title: 'Users', path: 'users'},
    {title: 'Login', path: 'login'}
    ];

  constructor(private router: Router) { }

  navigateTo(entry: NavigationEntryInterface) {
    this.router.navigate([entry.path]).then(success => {
      this.location.next(entry);
    });
  }
}
