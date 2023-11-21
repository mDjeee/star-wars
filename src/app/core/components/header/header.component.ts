import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  nav = [
    'people',
    'films',
    'ships',
    'transports',
    'planets',
    'nations',
  ]
}
