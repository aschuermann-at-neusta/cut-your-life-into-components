import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationEntryInterface } from '../navigation-entry-interface';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  location: Observable<NavigationEntryInterface>;
  navigationEntrys: NavigationEntryInterface[] = [{title: 'Startpage'}];

  constructor() { }
}
