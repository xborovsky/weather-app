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

  getWeekForecast(coordinates:Coordinates):Observable<Weather[]> {
    return this.http.get(API_URL + `${coordinates.lat},${coordinates.lon}`)
      .map((res:Response) => {
        let body = res.json();
        let weather = [];

        for (var i=0; i<body.daily.data.length; i++) {
          console.log(body.daily.data[i]);
          weather.push(this.doExtract(body.timezone, body.daily.data[i]));
        }

        return weather;
      }, (err:any) => {
        console.log(err);
      });
  }
  
  private extractData(res:Response):Weather {
      let body = res.json();
      return this.doExtract(body.timezone, body.currently);
  }

  private doExtract(timezone:string, weatherData:any):Weather {
    return new WeatherBuilder()
        .setTimezone(timezone)
        .setTemperature(this.converterService.farehnheitToCelsius(weatherData.temperature))
        .setTemperatureMin(this.converterService.farehnheitToCelsius(weatherData.temperatureMin))
        .setTemperatureMax(this.converterService.farehnheitToCelsius(weatherData.temperatureMax))
        .setHumidity(weatherData.humidity)
        .setIcon(weatherData.icon)
        .setSummary(weatherData.summary)
        .setWindSpeed(weatherData.windSpeed)
        .setCloudCover(weatherData.cloudCover)
        .build();
  }

}
