import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {NationsComponent} from "./nations.component";

const routes = [
  {
    path: '',
    component: NationsComponent
  }
]

@NgModule({
  declarations: [
    NationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class NationsModule { }
