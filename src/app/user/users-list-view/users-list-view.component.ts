import { UserInterface } from './../user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-list-view',
  templateUrl: './users-list-view.component.html',
  styleUrls: ['./users-list-view.component.scss']
})
export class UsersListViewComponent implements OnInit {
  @Input() users: UserInterface[];

  constructor() { }

  ngOnInit() {
  }

}
