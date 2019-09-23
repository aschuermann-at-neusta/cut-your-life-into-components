import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { State } from './state.enum';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private currentState: ReplaySubject<State> = new ReplaySubject<State>(1);
  currentState$ = this.currentState.asObservable();

  init(state: State = State.SILENT) {
    this.setNewState(state);
  }

  private setNewState(newState: State): void {
    this.currentState$ = this.currentState$.pipe(
      filter((state: State) => this.isValidStateChange(state, newState)),
      tap((_) => {
        this.handleStateChangeToReached(newState);
      }),
      map((_) => newState)
    );
  }

  private handleStateChangeToReached(newState: State) {
    if (newState === State.REACHED) {
      setTimeout(() => {
        this.setNewState(State.SILENT);
        console.log('Timeout erreicht');
      }, 6000);
    }
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

  private isStateChangeRunningToReached(state: State, newState: State) {
    return newState === State.REACHED && state === State.RUNNING;
  }

  private isStateChangeSilentToRunning(state: State, newState: State): boolean {
    return newState === State.RUNNING && state === State.SILENT;
  }

  private isStateChangeReachedToSilent(state: State, newState: State): boolean {
    return newState === State.SILENT && state === State.REACHED;
  }

  private isValidStateChange(state: State, newState: State): boolean {
    return (
      this.isStateChangeSilentToRunning(state, newState) ||
      this.isStateChangeRunningToReached(state, newState) ||
      this.isStateChangeReachedToSilent(state, newState)
    );
  }
}
