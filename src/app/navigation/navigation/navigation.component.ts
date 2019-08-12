import { NavigationEntryInterface } from './../navigation-entry-interface';
import { NavigationService } from './../navigation-data/navigation.service';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(public navigationService: NavigationService) { }

  ngOnInit() {
  
  }

  

}
