import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NavigationEntryInterface } from '../navigation-entry-interface';

@Component({
  selector: 'app-navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.scss']
})
export class NavigationListComponent implements OnInit {
  @Input() navigationEntries: NavigationEntryInterface[];
  @Output() activateEntry: EventEmitter<NavigationEntryInterface> = new EventEmitter<NavigationEntryInterface>();
  @Input() activeEntry: NavigationEntryInterface; 

  constructor() { }

  ngOnInit() {
  }

}
