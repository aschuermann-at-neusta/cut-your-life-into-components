import { Injectable } from '@angular/core';
import { State } from './state.enum';

@Injectable({
  providedIn: 'root'
})
export class StateStorageService {

  storeStateToSession(state: State) {
    sessionStorage.setItem('randori-djkhaleed.timer-state', JSON.stringify(state));
  }

  getStateFromSession(): State {
    return JSON.parse(sessionStorage.getItem('randori-djkhaleed.timer-state'));
  }
}
