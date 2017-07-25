import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Weather } from '../weather';
import { Coordinates } from '../coordinates';

import { WeatherService } from '../weather.service';
import { CalendarUtil } from '../calendar.util';

@Component({
  selector: 'app-week-forecast',
  templateUrl: './week-forecast.component.html',
  styleUrls: ['./week-forecast.component.css']
})
export class WeekForecastComponent implements OnInit {

  weatherForecast : Weather[];
  detailView : boolean[] = [];

  classesSimple:string[] = ['col-xs-12', 'col-sm-10', 'col-sm-offset-1', 'col-md-6', 'col-mf-offset-3', 'col-lg-4', 'col-lg-offset-4'];
  classesDetail:string[] = ['col-xs-12', 'col-sm-12', 'col-md-10', 'col-mf-offset-1', 'col-lg-8', 'col-lg-offset-2'];
  
  constructor(
    private weatherService:WeatherService, 
    private router:Router, 
    private activatedRoute:ActivatedRoute,
    private calendarUtil:CalendarUtil) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.weatherService.getWeekForecast(new Coordinates(+params['lat'], +params['lon']))
      .subscribe((forecast:Weather[]) => {
        this.weatherForecast = forecast;
        forecast.forEach((weather:Weather, i:number) => {
          this.detailView.push(false);
        });
      });
    });
  }

  getDayName(dayNum:number):string {
    return this.calendarUtil.getNextDayName(dayNum);
  }

}
