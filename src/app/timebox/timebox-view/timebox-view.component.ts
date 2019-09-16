import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timebox-view',
  templateUrl: './timebox-view.component.html',
  styleUrls: [ './timebox-view.component.scss' ]
})
export class TimeboxViewComponent implements OnInit {
  @Output() start: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

}
