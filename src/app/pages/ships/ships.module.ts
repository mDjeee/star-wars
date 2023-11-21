import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {ShipsComponent} from "./ships.component";

const routes = [
  {
    path: '',
    component: ShipsComponent
  }
]

@NgModule({
  declarations: [
    ShipsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class ShipsModule { }
