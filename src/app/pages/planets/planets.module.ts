import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {PlanetsComponent} from "./planets.component";

const routes = [
  {
    path: '',
    component: PlanetsComponent
  }
]

@NgModule({
  declarations: [
    PlanetsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class PlanetsModule { }
