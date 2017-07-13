import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Coordinates } from './coordinates';
import { Weather, WeatherBuilder } from './weather';
import { ConverterService } from './converter.service';

const API_KEY = '21680c895598f666908b329b5fb62354';
const API_URL = 'http://localhost:1337/api.darksky.net/forecast/' + API_KEY + '/';

@Injectable()
export class WeatherService {

  private currentPlace:string = '';

  constructor(private http:Http, private converterService:ConverterService) { }

  getCurrentWeather(coordinates:Coordinates): Observable<Weather> {
      return this.http.get(API_URL + coordinates.lat + ',' + coordinates.lon)
        .map((res:Response) => {
          console.log(res.json());
          return this.extractData(res);
        }, (err : Response | any) => { 
          console.log(err); return err.json(); 
        });
  }
  
  private extractData(res:Response):Weather {
      let body = res.json();
      return new WeatherBuilder()
        .setTimezone(body.timezone)
        .setTemperature(this.converterService.farehnheitToCelsius(body.currently.temperature))
        .setHumidity(body.currently.humidity)
        .setIcon(body.currently.icon)
        .setSummary(body.currently.summary)
        .setWindSpeed(body.currently.windSpeed)
        .setCloudCover(body.currently.cloudCover)
        .build();
  }

}
