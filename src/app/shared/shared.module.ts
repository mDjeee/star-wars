import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ]
})
export class SharedModule { }
