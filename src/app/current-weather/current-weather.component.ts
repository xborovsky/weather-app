import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Weather } from '../weather';
import { Coordinates } from '../coordinates';

import { WeatherService } from '../weather.service';
import { LocationService } from '../location.service';
import { FavoritesManagerService } from '../favorites-manager.service';

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
  address:string;

  constructor(
    private weatherService:WeatherService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private favoritesManager:FavoritesManagerService,
    private locationService:LocationService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.lat = +params['lat'];
      this.lon = +params['lon'];

      this.weatherService.getCurrentWeather(new Coordinates(this.lat, this.lon))
      .subscribe((weather : Weather) => {
        this.weather = weather;
        this.skycons = new Skycons();
      });

      this.locationService.reverseGeocode(this.lat, this.lon)
        .subscribe((address:string) => {
          this.address = address;
        });
    });
  }

  makeFavorite(lat:number, lon:number) {
      this.favoritesManager.addFavoritePlace(this.address, new Coordinates(lat, lon));
  }

  unFavorite(address:string) {
    this.favoritesManager.removeFavoritePlace(address);
  }

  isFavorite(address:string) {
    return this.favoritesManager.isFavoritePlace(address);
  }

}
