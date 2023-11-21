import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {FilmsComponent} from "./films.component";

const routes = [
  {
    path: '',
    component: FilmsComponent
  }
]

@NgModule({
  declarations: [
    FilmsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class FilmsModule { }
