import { UserInterface } from '../../user';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-users-list-view',
  templateUrl: './users-list-view.component.html',
  styleUrls: ['./users-list-view.component.scss']
})
export class UsersListViewComponent implements OnInit {
  @Input() users: UserInterface[];
  @Output() clickedUser: EventEmitter<UserInterface> = new EventEmitter<UserInterface>();

  constructor() { }

  ngOnInit() {
  }

  userClicked(user: UserInterface) {
    this.clickedUser.emit(user);
  }
}
