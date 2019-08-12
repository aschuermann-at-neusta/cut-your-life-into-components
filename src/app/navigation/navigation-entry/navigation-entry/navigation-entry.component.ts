import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-entry',
  templateUrl: './navigation-entry.component.html',
  styleUrls: ['./navigation-entry.component.scss']
})
export class NavigationEntryComponent implements OnInit {
  @Input() title: string;
  @Input() active: boolean;
  @Output() activate: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

}
