import { Component, Input } from '@angular/core';

import { Weather } from '../weather';

declare var Skycons:any;

@Component({
  selector: 'app-week-forecast-simple',
  templateUrl: './week-forecast-simple.component.html',
  styleUrls: ['./week-forecast-simple.component.css']
})
export class WeekForecastSimpleComponent {

  @Input()
  dayName:string;
  @Input()
  forecast:Weather;
  @Input()
  id:number; // for skycons

  skycons:any = new Skycons();

  constructor() { }

}
