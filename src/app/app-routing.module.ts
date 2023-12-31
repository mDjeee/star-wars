import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "./shared/components/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'people',
    loadChildren: () => import('./pages/people/people.module').then(m => m.PeopleModule),
    title: 'People',
  },
  {
    path: 'films',
    loadChildren: () => import('./pages/films/films.module').then(m => m.FilmsModule),
    title: 'Films',
  },
  {
    path: 'ships',
    loadChildren: () => import('./pages/ships/ships.module').then(m => m.ShipsModule),
    title: 'Starships',
  },
  {
    path: 'transports',
    loadChildren: () => import('./pages/transports/transports.module').then(m => m.TransportsModule),
    title: 'Transports',
  },
  {
    path: 'planets',
    loadChildren: () => import('./pages/planets/planets.module').then(m => m.PlanetsModule),
    title: 'Planets',
  },
  {
    path: 'nations',
    loadChildren: () => import('./pages/nations/nations.module').then(m => m.NationsModule),
    title: 'Nations',
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
