import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { find, map } from 'rxjs/operators';
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

  findByFirstNameAndLastName(firstname: string, lastname: string): Observable<UserInterface> {
    return this.users$.pipe(
      map((users: UserInterface[]) => users
        .find((user: UserInterface) =>
          user.firstname === firstname && user.lastname === lastname)
      )
    );
  }

  constructor() {
  }
}
