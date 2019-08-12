import { Component } from '@angular/core';
import { NavigationService } from './../navigation-data/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(public navigationService: NavigationService) { }

}
