import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailNameComponent } from './profile-detail-name.component';

describe('ProfileDetailNameComponent', () => {
  let component: ProfileDetailNameComponent;
  let fixture: ComponentFixture<ProfileDetailNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDetailNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
