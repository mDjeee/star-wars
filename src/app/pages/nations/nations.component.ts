import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { NationsFacade } from './store/facade';

@Component({
  selector: 'app-nations',
  templateUrl: './nations.component.html',
  styleUrls: ['./nations.component.scss'],
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
          style({ opacity: 0, transform: "translateX(0) scale(0.9)" })
        )
      ])
    ])
  ]
})
export class NationsComponent {
  constructor(public nationsFacade: NationsFacade) {
  }

  ngOnInit() {
    const res = this.nationsFacade.getNations(1);
  }

  nextPeople(page: string) {
    if(!page) {
      return;
    }
    const nextPage = +page.slice(-1);
    this.nationsFacade.getNations(nextPage);
  }
}
