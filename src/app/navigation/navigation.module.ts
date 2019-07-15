import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEntryModule } from './navigation-entry/navigation-entry.module';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    NavigationEntryModule
  ],
  exports: [NavigationComponent]
})
export class NavigationModule { }
