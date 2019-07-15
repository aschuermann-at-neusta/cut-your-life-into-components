import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoboxComponent } from './infobox/infobox.component';

@NgModule({
  declarations: [InfoboxComponent],
  imports: [
    CommonModule
  ],
  exports: [
    InfoboxComponent
  ]
})
export class InfoboxModule { }
