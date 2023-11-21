import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from "../shared/shared.module";
import { MainComponent } from './components/main/main.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    MainComponent,
  ]
})
export class CoreModule { }
