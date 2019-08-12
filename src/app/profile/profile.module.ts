import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDetailNameModule } from './profile-detail/profile-detail-name/profile-detail-name.module';
import { ProfileDetailModule } from './profile-detail/profile-detail.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ProfileDetailNameComponent } from './profile-detail/profile-detail-name/profile-detail-name.component';
import { ProfileDetailAddressComponent } from './profile-detail/profile-detail-address/profile-detail-address.component';
import { ProfileDetailAgeComponent } from './profile-detail/profile-detail-age/profile-detail-age.component';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileDetailModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
