import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEntryModule } from './navigation-entry/navigation-entry.module';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationListComponent } from './navigation-list/navigation-list.component';

@NgModule({
  declarations: [NavigationComponent, NavigationListComponent],
  imports: [
    CommonModule,
    NavigationEntryModule
  ],
  exports: [NavigationComponent]
})
export class NavigationModule { }
