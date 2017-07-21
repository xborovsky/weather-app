import { Component, OnInit } from '@angular/core';

import { FavoritesManagerService } from '../favorites-manager.service';
import { WeatherService } from '../weather.service';

import { Weather } from '../weather';
import { FavoritePlace } from '../favorite-place';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  private weatherInFavoritePlaces:Weather[] = [];

  constructor(private favoritesManager:FavoritesManagerService, private weatherService:WeatherService) { }

  ngOnInit() {
    let favoritePlaces = this.favoritesManager.getAllFavoritePlaces();
    if (!favoritePlaces || !favoritePlaces.length) {
      this.weatherInFavoritePlaces = [];
    } else {
      favoritePlaces.forEach((favoritePlace:FavoritePlace) => {
        this.weatherService.getCurrentWeather(favoritePlace['coordinates'])
          .subscribe((weather:Weather) => {
            this.weatherInFavoritePlaces.push(weather);
            console.log(this.weatherInFavoritePlaces);
          });
      });
    }
  }

}
