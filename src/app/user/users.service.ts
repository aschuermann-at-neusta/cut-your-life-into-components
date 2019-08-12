import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserInterface } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users$: Observable<UserInterface[]> = of([
    {
      firstname: 'Cindy',
      lastname: 'Charleston'
    },
    {
      firstname: 'Juri',
      lastname: 'Dobrownik'
    },
    {
      firstname: 'Simone',
      lastname: 'Smith'
    },
    {
      firstname: 'Andrea',
      lastname: 'Schürmann'
    }
  ]);

  constructor() { }
}
