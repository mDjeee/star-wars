import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {PeopleFacade} from "../people/store/facade";
import {FilmsFacade} from "./store/facade";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
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
export class FilmsComponent implements OnInit {
  constructor(public filmsFacade: FilmsFacade) {
  }

  ngOnInit() {
    const res = this.filmsFacade.getPeople(1);
    console.log(res);
  }

  nextPeople(page: string) {
    if(!page) {
      return;
    }
    const nextPage = +page.slice(-1);
    this.filmsFacade.getPeople(nextPage);
  }
}
