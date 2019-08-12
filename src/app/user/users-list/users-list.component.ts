import { UserInterface } from '../user';
import { UsersService } from './../users.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: [ './users-list.component.scss' ]
})
export class UsersListComponent implements OnInit {
  @Output() clickedUser: EventEmitter<UserInterface> = new EventEmitter<UserInterface>();

  constructor(public usersService: UsersService) {
  }

  ngOnInit() {
  }

}
