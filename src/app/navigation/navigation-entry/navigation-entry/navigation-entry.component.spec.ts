import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationEntryComponent } from './navigation-entry.component';

describe('NavigationEntryComponent', () => {
  let component: NavigationEntryComponent;
  let fixture: ComponentFixture<NavigationEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
