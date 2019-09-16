import { TestBed } from '@angular/core/testing';

import { StateSessionSyncService } from './state-session-sync.service';

describe('StateSessionSyncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StateSessionSyncService = TestBed.get(StateSessionSyncService);
    expect(service).toBeTruthy();
  });
});
