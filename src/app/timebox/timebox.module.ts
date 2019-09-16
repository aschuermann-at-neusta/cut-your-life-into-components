import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeboxComponent } from './timebox/timebox.component';
import { TimeboxViewComponent } from './timebox-view/timebox-view.component';
import { TimerViewComponent } from './timer-view/timer-view.component';
import { TimerSoundViewComponent } from './timer-sound-view/timer-sound-view.component';

@NgModule({
  declarations: [TimeboxComponent, TimeboxViewComponent, TimerViewComponent, TimerSoundViewComponent],
  imports: [
    CommonModule
  ],
  exports: [TimeboxComponent]
})
export class TimeboxModule { }
