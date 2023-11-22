import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ShipsFacade } from './store/facade';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss'],
  animations: [
    trigger("inOutPaneAnimation", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateX(-100%)" }),
        animate(
          "750ms ease-in-out",
          style({ opacity: 1, transform: "translateX(0)" })
        )
      ]),
      transition(":leave", [
        style({ opacity: 1, transform: "translateX(0)" }),
        animate(
          "600ms ease-in-out",
          style({ opacity: 0, transform: "translateX(100%)" })
        )
      ])
    ])
  ]
})
export class ShipsComponent {

  constructor(public shipsFacade: ShipsFacade) {
  }

  ngOnInit() {
    this.shipsFacade.getShips(1);
  }

  nextPeople(page: string) {
    if(!page) {
      return;
    }
    const nextPage = +page.slice(-1);
    this.shipsFacade.getShips(nextPage);
  }
}
