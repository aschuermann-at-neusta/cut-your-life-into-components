import { ProfileInterface } from './profile-interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile: ProfileInterface = {
    name: {firstname: 'Cindy', lastname: 'Charleston'},
    address: {street: 'Bubble Street', housenumber: 4, city:'Bora Bora'},
    age: {age: 60}
  }

  constructor() { }
}
