import { Component, OnInit } from '@angular/core';

import { LocationService } from '../location.service';
import { WeatherService } from '../weather.service';
import { Coordinates } from '../coordinates';
import { Weather } from '../weather';

declare var Skycons:any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchQuery:string = null;
  searchCoordinates : Coordinates;
  weather : Weather;
  skycons : any;

  constructor(private locationService:LocationService, private weatherService:WeatherService) { }

  ngOnInit() {
    this.locationService.getCurrentCoordinates()
        .subscribe((coordinates:Coordinates) => {
          this.locationService.reverseGeocode(coordinates.lat, coordinates.lon)
            .subscribe((address : string) => {
              this.search(address);
            });
        });
  }

  search(searchQuery:string):void {
    this.searchQuery = searchQuery;
    this.locationService.geocode(searchQuery)
      .subscribe((coords : Coordinates) => {
        this.searchCoordinates = coords;
        this.weatherService.getCurrentWeather(coords)
          .subscribe((weather : Weather) => {
            this.weather = weather;
            this.skycons = new Skycons();
          });
      });
  }

}
