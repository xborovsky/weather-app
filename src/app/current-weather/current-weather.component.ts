import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Weather } from '../weather';
import { Coordinates } from '../coordinates';

import { WeatherService } from '../weather.service';

declare var Skycons:any;

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  weather:Weather;
  skycons:any;
  lat:number;
  lon:number;

  constructor(private weatherService:WeatherService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.lat = +params['lat'];
      this.lon = +params['lon'];

      this.weatherService.getCurrentWeather(new Coordinates(this.lat, this.lon))
      .subscribe((weather : Weather) => {
        this.weather = weather;
        this.skycons = new Skycons();
      });
    });
  }

}
