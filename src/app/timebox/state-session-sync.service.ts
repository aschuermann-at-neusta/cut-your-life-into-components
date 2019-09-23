import { Injectable } from '@angular/core';
import { StateStorageService } from './state-storage.service';
import { State } from './state.enum';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class StateSessionSyncService {
  private stateFunctionMapping: Map<State, any> = new Map<State, any>();

  constructor(private stateStorageService: StateStorageService,
              private stateService: StateService
  ) {
    this.stateFunctionMapping.set(State.RUNNING, this.stateService.setStateRunning);
    this.stateFunctionMapping.set(State.REACHED, this.stateService.setStateSound);
  }

  init() {
    this.stateService.currentState$.subscribe(state => {
      this.stateStorageService.storeStateToSession(state);
    });

    const state: State = this.stateStorageService.getStateFromSession();
    this.stateService.init(state);
  }
}
