import { UserInterface } from '../../user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-list-entry',
  templateUrl: './users-list-entry.component.html',
  styleUrls: ['./users-list-entry.component.scss']
})
export class UsersListEntryComponent implements OnInit {
  @Input() name: UserInterface;

  constructor() { }

  ngOnInit() {
  }

}
