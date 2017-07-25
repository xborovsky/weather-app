import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { WeatherService } from './weather.service';
import { LocationService } from './location.service';
import { ConverterService } from './converter.service';
import { FavoritesManagerService } from './favorites-manager.service';
import { CalendarUtil } from './calendar.util';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { WeekForecastComponent } from './week-forecast/week-forecast.component';

import { RoutesModule } from './routes/routes.module';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { WeekForecastSimpleComponent } from './week-forecast-simple/week-forecast-simple.component';
import { WeekForecastDetailComponent } from './week-forecast-detail/week-forecast-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WeekForecastComponent,
    CurrentWeatherComponent,
    FavoritesComponent,
    WeekForecastSimpleComponent,
    WeekForecastDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RoutesModule
  ],
  providers: [WeatherService, LocationService, ConverterService, FavoritesManagerService, CalendarUtil],
  bootstrap: [AppComponent]
})
export class AppModule { }
