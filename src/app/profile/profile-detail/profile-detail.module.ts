import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileDetailAddressComponent } from './profile-detail-address/profile-detail-address.component';
import { ProfileDetailAgeComponent } from './profile-detail-age/profile-detail-age.component';
import { ProfileDetailNameModule } from './profile-detail-name/profile-detail-name.module';
import { ProfileDetailComponent } from './profile-detail.component';

@NgModule({
  declarations: [
    ProfileDetailComponent,
    ProfileDetailAddressComponent,
    ProfileDetailAgeComponent
  ],
  imports: [
    CommonModule,
    ProfileDetailNameModule
  ],
  exports: [
    ProfileDetailComponent
  ]
})
export class ProfileDetailModule { }
