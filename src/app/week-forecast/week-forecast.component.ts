import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private weatherService:WeatherService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.weatherService.getWeekForecast(new Coordinates(+params['lat'], +params['lon']))
      .subscribe((forecast:Weather[]) => {
        this.weatherForecast = forecast;
      });
    });
  }

}
