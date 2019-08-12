import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailAddressComponent } from './profile-detail-address.component';

describe('ProfileDetailAddressComponent', () => {
  let component: ProfileDetailAddressComponent;
  let fixture: ComponentFixture<ProfileDetailAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDetailAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
