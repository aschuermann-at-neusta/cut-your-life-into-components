import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInterface } from '../user';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: [ './users-list.component.scss' ]
})
export class UsersListComponent {
  constructor(public usersService: UsersService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
  }

  navigateToUserProfile(user: UserInterface) {
    this.router.navigate([`${user.firstname}/${user.lastname}`], {relativeTo: this.activeRoute});
  }
}
