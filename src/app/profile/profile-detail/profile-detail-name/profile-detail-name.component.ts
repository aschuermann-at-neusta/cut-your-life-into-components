import { ProfileNameInterface } from './../../profile-name-interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-detail-name',
  templateUrl: './profile-detail-name.component.html',
  styleUrls: ['./profile-detail-name.component.scss']
})
export class ProfileDetailNameComponent implements OnInit {

  @Input() name: ProfileNameInterface;

  constructor() { }

  ngOnInit() {
  }

}
