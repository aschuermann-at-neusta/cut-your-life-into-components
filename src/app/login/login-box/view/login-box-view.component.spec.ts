import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBoxViewComponent } from './login-box-view.component';

describe('LoginBoxComponent', () => {
  let component: LoginBoxViewComponent;
  let fixture: ComponentFixture<LoginBoxViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginBoxViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBoxViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
