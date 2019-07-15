import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEntryComponent } from './navigation-entry/navigation-entry.component';

@NgModule({
  declarations: [NavigationEntryComponent],
  imports: [
    CommonModule
  ],
  exports: [NavigationEntryComponent]
})
export class NavigationEntryModule { }
