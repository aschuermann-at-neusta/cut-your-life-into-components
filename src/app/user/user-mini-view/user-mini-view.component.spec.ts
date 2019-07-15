import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMiniViewComponent } from './user-mini-view.component';

describe('UserMiniViewComponent', () => {
  let component: UserMiniViewComponent;
  let fixture: ComponentFixture<UserMiniViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMiniViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMiniViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
