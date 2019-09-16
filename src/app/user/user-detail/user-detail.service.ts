import { Injectable } from '@angular/core';
import { UserInterface } from '../user';
import { UserDetailInterface } from './user-detail-interface';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor() {
  }

  getDetailForUser(user: UserInterface): UserDetailInterface {
    return {
      name: {...user},
      address: {
        street: 'Konsul-Smidt-Str.',
        housenumber: 24,
        city: 'Bremen'
      },
      age: {
        age: 30
      }
    };
  }
}
