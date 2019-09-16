import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserInterface } from '../user';
import { UsersService } from '../users.service';
import { UserDetailInterface } from './user-detail-interface';
import { UserDetailService } from './user-detail.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: [ './user-detail.component.scss' ]
})
export class UserDetailComponent implements OnInit {
  public userDetail$: Observable<UserDetailInterface>;

  constructor(private userDetailService: UserDetailService,
              private usersService: UsersService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.userDetail$ = this.usersService.findByFirstNameAndLastName(
      this.route.snapshot.paramMap.get('firstname'),
      this.route.snapshot.paramMap.get('lastname')
    ).pipe(
      map(user => this.userDetailService.getDetailForUser(user))
    );
  }

}
