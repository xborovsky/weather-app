import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LocationService } from '../location.service';
import { WeatherService } from '../weather.service';
import { Coordinates } from '../coordinates';
import { Weather } from '../weather';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchQuery:string = null;
  searchCoordinates : Coordinates;
  weather : Weather;

  constructor(
    private locationService:LocationService,
    private weatherService:WeatherService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.locationService.getCurrentCoordinates()
        .subscribe((coordinates:Coordinates) => {
          console.log(coordinates);
          this.locationService.reverseGeocode(coordinates.lat, coordinates.lon)
            .subscribe((address : string) => {
              console.log(address);
              this.search(address);
            });
        });
  }

  search(searchQuery:string):void {
    this.searchQuery = searchQuery;
    this.locationService.geocode(searchQuery)
      .subscribe((coords : Coordinates) => {
        this.searchCoordinates = coords;
        this.router.navigate([this.router.url.substring(0, this.router.url.indexOf('?'))], { queryParams : { lat:coords.lat, lon:coords.lon } });
      });
  }

}
