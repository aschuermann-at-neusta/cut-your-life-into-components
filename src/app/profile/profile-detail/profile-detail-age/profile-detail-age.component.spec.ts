import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailAgeComponent } from './profile-detail-age.component';

describe('ProfileDetailAgeComponent', () => {
  let component: ProfileDetailAgeComponent;
  let fixture: ComponentFixture<ProfileDetailAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDetailAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
