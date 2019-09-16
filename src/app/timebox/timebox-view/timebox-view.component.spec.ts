import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeboxViewComponent } from './timebox-view.component';

describe('TimeboxViewComponent', () => {
  let component: TimeboxViewComponent;
  let fixture: ComponentFixture<TimeboxViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeboxViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeboxViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
