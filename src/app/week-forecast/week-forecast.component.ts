import { Component, OnInit } from '@angular/core';

import { Weather } from '../weather';
import { Coordinates } from '../coordinates';

import { WeatherService } from '../weather.service';

declare var Skycons:any;

@Component({
  selector: 'app-week-forecast',
  templateUrl: './week-forecast.component.html',
  styleUrls: ['./week-forecast.component.css']
})
export class WeekForecastComponent implements OnInit {

  weatherForecast : Weather[];
  skycons : any = new Skycons();

  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeekForecast(new Coordinates(50.0414874, 14.4428629))
      .subscribe((forecast:Weather[]) => {
        this.weatherForecast = forecast;
      });
  }

}
