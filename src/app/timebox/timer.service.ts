import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timeStamp: Date;
  minutes: number;
  endTimerReached: Subject<boolean> = new Subject<boolean>();
  endTimerReached$: Observable<boolean> = this.endTimerReached.asObservable();

  constructor() {
  }

  setTimer(minutes: number) {
    this.timeStamp = new Date(Date.now());
    this.minutes = minutes;

    setTimeout(() => {
      this.endTimerReached.next(true);
    }, minutes * 1000 * 60);
  }
}
