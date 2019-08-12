import { Component } from '@angular/core';
import { UserInterface } from '../../user/user';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: [ './startpage.component.scss' ]
})
export class StartpageComponent {
  clickedUser: UserInterface;
}
