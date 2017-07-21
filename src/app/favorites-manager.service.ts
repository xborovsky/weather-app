import { Injectable } from '@angular/core';

import { Coordinates } from './coordinates';
import { FavoritePlace } from './favorite-place';

const STORAGE_NAME = 'weather-storage';
const FAVORITES_KEY = 'favorites';

@Injectable()
export class FavoritesManagerService {

  constructor() {}

  addFavoritePlace(address:string, coords:Coordinates):void {
    var data = JSON.parse(localStorage.getItem(STORAGE_NAME)) || [];
    var found = this.isFavoritePlace(address);

    if (!found) {
      data.push(new FavoritePlace(address, coords));
      localStorage.setItem(STORAGE_NAME, JSON.stringify(data));
    }
  }

  removeFavoritePlace(address:string):void {
    var data = JSON.parse(localStorage.getItem(STORAGE_NAME));
    if (!data) {
      return;
    }
    var removed = data.filter(element => {
      return element.address !== address;
    });
    localStorage.setItem(STORAGE_NAME, JSON.stringify(removed));
  }

  removeFavoritePlaceByCoordinates(coordinates:Coordinates):void {
    var data = JSON.parse(localStorage.getItem(STORAGE_NAME));
    if (!data) {
      return;
    }
    var removed = data.filter(element => {
      return element.coordinates.lat !== coordinates.lat && element.coordinates.lon !== coordinates.lon;
    });
    localStorage.setItem(STORAGE_NAME, JSON.stringify(removed));
  }

  isFavoritePlace(address:string):boolean {
    var data = JSON.parse(localStorage.getItem(STORAGE_NAME));
    if (!data) {
      return false;
    }

    return data.find(element => {
      return element.address === address;
    });
  }

  getAllFavoritePlaces():FavoritePlace[] {
    var data = JSON.parse(localStorage.getItem(STORAGE_NAME));
    console.log(data);
    if (!data) {
      return [];
    }
    return data;
  }

}
