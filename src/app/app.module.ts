import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherService } from './weather.service';
import { LocationService } from './location.service';
import { ConverterService } from './converter.service';
import { SearchComponent } from './search/search.component';
import { WeekForecastComponent } from './week-forecast/week-forecast.component';

import { RoutesModule } from './routes/routes.module';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WeekForecastComponent,
    CurrentWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RoutesModule
  ],
  providers: [WeatherService, LocationService, ConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
