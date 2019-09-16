import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timer-view',
  templateUrl: './timer-view.component.html',
  styleUrls: [ './timer-view.component.scss' ]
})
export class TimerViewComponent {
  @Input() time: number;


  secondsTotal() {
    return Math.floor(this.time / 1000);
  }

  seconds() {
    return this.secondsTotal() % 60;
  }

  minutes() {
    return Math.floor(this.secondsTotal() / 60);
  }
}
