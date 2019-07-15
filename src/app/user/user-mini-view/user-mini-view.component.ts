import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-mini-view',
  templateUrl: './user-mini-view.component.html',
  styleUrls: [ './user-mini-view.component.scss' ]
})
export class UserMiniViewComponent {
  @Input() user: string;
}
