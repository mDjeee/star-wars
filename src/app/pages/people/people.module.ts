import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PeopleComponent} from "./people.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";

const routes = [
  {
    path: '',
    component: PeopleComponent
  }
]

@NgModule({
  declarations: [
    PeopleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class PeopleModule { }
