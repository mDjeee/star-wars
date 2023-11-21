import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./core/components/main/main.component";

const routes: Routes = [
  {
    path: 'home',
    component: MainComponent,
  },
  {
    path: 'people',
    loadChildren: () => import('./pages/people/people.module').then(m => m.PeopleModule)
  },
  {
    path: 'films',
    loadChildren: () => import('./pages/films/films.module').then(m => m.FilmsModule)
  },
  {
    path: 'ships',
    loadChildren: () => import('./pages/ships/ships.module').then(m => m.ShipsModule)
  },
  {
    path: 'transports',
    loadChildren: () => import('./pages/transports/transports.module').then(m => m.TransportsModule)
  },
  {
    path: 'planets',
    loadChildren: () => import('./pages/planets/planets.module').then(m => m.PlanetsModule)
  },
  {
    path: 'nations',
    loadChildren: () => import('./pages/nations/nations.module').then(m => m.NationsModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
