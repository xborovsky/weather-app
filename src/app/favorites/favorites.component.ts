import { Component, OnInit } from '@angular/core';

import { FavoritesManagerService } from '../favorites-manager.service';
import { WeatherService } from '../weather.service';

import { Weather } from '../weather';
import { FavoritePlace } from '../favorite-place';
import { Coordinates } from '../coordinates';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  private weatherInFavoritePlaces:FavoritePlaceWeather[] = [];

  constructor(private favoritesManager:FavoritesManagerService, private weatherService:WeatherService) { }

  ngOnInit() {
    this.reloadFavoritePlaces();
  }

  removeFavorite(lat:number, lon:number):void {
    this.favoritesManager.removeFavoritePlaceByCoordinates(new Coordinates(lat, lon));
    this.reloadFavoritePlaces();
  }

  private reloadFavoritePlaces():void {
    this.weatherInFavoritePlaces = [];
    let favoritePlaces = this.favoritesManager.getAllFavoritePlaces();
    if (!favoritePlaces || !favoritePlaces.length) {
      this.weatherInFavoritePlaces = [];
    } else {
      favoritePlaces.forEach((favoritePlace:FavoritePlace) => {
        this.weatherService.getCurrentWeather(favoritePlace['coordinates'])
          .subscribe((weather:Weather) => {
            let favoritePlaceWeather:FavoritePlaceWeather = new FavoritePlaceWeather();
            favoritePlaceWeather.weather = weather;
            favoritePlaceWeather.coordinates = favoritePlace['coordinates'];
            console.log(favoritePlaceWeather);
            this.weatherInFavoritePlaces.push(favoritePlaceWeather);
          });
      });
    }
  }

}

class FavoritePlaceWeather {
  public weather:Weather;
  public coordinates:Coordinates;
}