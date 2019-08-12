import { ProfileAgeInterface } from './../../profile-age-interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-detail-age',
  templateUrl: './profile-detail-age.component.html',
  styleUrls: ['./profile-detail-age.component.scss']
})
export class ProfileDetailAgeComponent implements OnInit {
  @Input() age: ProfileAgeInterface;
  constructor() { }

  ngOnInit() {
  }

}
