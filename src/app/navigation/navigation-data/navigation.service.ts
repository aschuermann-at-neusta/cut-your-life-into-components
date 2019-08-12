import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { NavigationEntryInterface } from '../navigation-entry-interface';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private location: ReplaySubject<NavigationEntryInterface> = new ReplaySubject<NavigationEntryInterface>(1);
  location$: Observable<NavigationEntryInterface> = this.location.asObservable();
  navigationEntrys: NavigationEntryInterface[] = [{title: 'Startpage'}, {title: 'Aldi'}, {title: 'Bora Bora'}];

  constructor() { }

  navigateTo(entry: NavigationEntryInterface) {
    this.location.next(entry);
  }
}
