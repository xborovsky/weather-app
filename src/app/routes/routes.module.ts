import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeekForecastComponent } from '../week-forecast/week-forecast.component';
import { CurrentWeatherComponent } from '../current-weather/current-weather.component';
import { FavoritesComponent } from '../favorites/favorites.component';

export const routes : Routes = [
  { path : '', redirectTo: 'current', pathMatch : 'full' },
  { path : 'current', component : CurrentWeatherComponent },
  { path : 'week-forecast', component : WeekForecastComponent },
  { path : 'favorites', component : FavoritesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutesModule { }
