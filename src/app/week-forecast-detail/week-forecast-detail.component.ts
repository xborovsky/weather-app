import { Component, Input } from '@angular/core';

import { Weather } from '../weather';

declare var Skycons:any;

@Component({
  selector: 'app-week-forecast-detail',
  templateUrl: './week-forecast-detail.component.html',
  styleUrls: ['./week-forecast-detail.component.css']
})
export class WeekForecastDetailComponent {

  @Input()
  forecast:Weather;
  @Input()
  dayName:string;
  @Input()
  id:number; // for skycons

  skycons:any = new Skycons();

  constructor() { }

}
