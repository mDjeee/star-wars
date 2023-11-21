import {Component, OnInit} from '@angular/core';
import {PeopleFacade} from "./store/facade";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
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
export class PeopleComponent implements OnInit {
  constructor(public peopleFacade: PeopleFacade) {
  }

  ngOnInit() {
    this.peopleFacade.getPeople(1);
  }

  nextPeople(page: string) {
    if(!page) {
      return;
    }
    const nextPage = +page.slice(-1);
    this.peopleFacade.getPeople(nextPage);
  }
}
