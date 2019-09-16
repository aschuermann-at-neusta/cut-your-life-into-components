import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerSoundViewComponent } from './timer-sound-view.component';

describe('TimerSoundViewComponent', () => {
  let component: TimerSoundViewComponent;
  let fixture: ComponentFixture<TimerSoundViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerSoundViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerSoundViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
