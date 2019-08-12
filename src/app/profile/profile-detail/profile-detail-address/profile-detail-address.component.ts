import { Component, OnInit, Input } from '@angular/core';
import { ProfileAddressInterface } from '../../profile-address-interface';

@Component({
  selector: 'app-profile-detail-address',
  templateUrl: './profile-detail-address.component.html',
  styleUrls: ['./profile-detail-address.component.scss']
})
export class ProfileDetailAddressComponent implements OnInit {
  @Input() address: ProfileAddressInterface;
  constructor() { }

  ngOnInit() {
  }

}
