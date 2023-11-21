import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {TransportsComponent} from "./transports.component";

const routes = [
  {
    path: '',
    component: TransportsComponent
  }
]

@NgModule({
  declarations: [
    TransportsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class TransportsModule { }
