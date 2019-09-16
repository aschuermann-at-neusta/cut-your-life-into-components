import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from './state.enum';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private currentState: BehaviorSubject<State> = new BehaviorSubject<State>(State.SILENT);
  currentState$ = this.currentState.asObservable();

  constructor() {
  }

  private setNewState(newState: State) {
    if (this.isStateChangeSilentToRunning(newState) ||
      this.isStateChangeRunningToReached(newState) || this.isStateChangeReachedToSilent(newState)) {
      this.currentState.next(newState);
    }
    if (newState === State.REACHED) {
      setTimeout(() => {
        this.setNewState(State.SILENT);
        console.log('Timeout erreicht');
      }, 6000);
    }
  }

  private isStateChangeRunningToReached(newState: State) {
    return newState === State.REACHED && this.currentState.value === State.RUNNING;
  }

  setStateRunning() {
    this.setNewState(State.RUNNING);
  }

  isStateSilent(): Observable<boolean> {
    return this.isState(State.SILENT);
  }

  isStateRunning(): Observable<boolean> {
    return this.isState(State.RUNNING);
  }

  isStateReached(): Observable<boolean> {
    return this.isState(State.REACHED);
  }

  isState(stateToCompare: State) {
    return this.currentState$.pipe(map(
      state => state === stateToCompare
    ));
  }

  setStateSound() {
    this.setNewState(State.REACHED);
  }

  private isStateChangeSilentToRunning(newState: State): boolean {
    return newState === State.RUNNING && this.currentState.value === State.SILENT;
  }

  private isStateChangeReachedToSilent(newState: State): boolean {
    return newState === State.SILENT && this.currentState.value === State.REACHED;
  }
}
