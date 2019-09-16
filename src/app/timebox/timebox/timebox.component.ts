import { Component, OnInit } from '@angular/core';
import { StateSessionSyncService } from '../state-session-sync.service';
import { StateService } from '../state.service';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timebox',
  templateUrl: './timebox.component.html',
  styleUrls: [ './timebox.component.scss' ]
})
export class TimeboxComponent implements OnInit {
  millisecondsTillEnd: number;

  constructor(public stateService: StateService,
              private timerService: TimerService,
              private stateSessionSyncService: StateSessionSyncService
  ) {
  }

  ngOnInit() {
    this.timerService.endTimerReached$.subscribe(_ => {
      this.stateService.setStateSound();
    });
    this.stateSessionSyncService.init();
  }

  startTimer(minutes: number) {
    this.stateService.setStateRunning();
    this.timerService.setTimer(minutes);
    this.millisecondsTillEnd = this.calculateMillisecondsTillEnd();

    setInterval(() => {
      this.millisecondsTillEnd = this.calculateMillisecondsTillEnd();
    }, 500);
  }

  private calculateMillisecondsTillEnd(): number {
    const minutesInMilliseconds = this.timerService.minutes * 60 * 1000;
    return new Date((this.timerService.timeStamp.getTime() + minutesInMilliseconds) - Date.now()).getTime();
  }
}
