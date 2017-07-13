import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Http, Response } from '@angular/http';

import { Coordinates } from './coordinates';

const GEOCODING_URL = 'https://maps.googleapis.com/maps/api/geocode/json';

@Injectable()
export class LocationService {

    constructor(private http:Http) {}

    getCurrentCoordinates() : Observable<Coordinates> {
        if (!navigator.geolocation) {
            throw 'Geolocation not supported!';
        }
        return new Observable((observer:Observer<Coordinates>) => {
            navigator.geolocation.getCurrentPosition(function(position) {
                observer.next(new Coordinates(position.coords.latitude, position.coords.longitude));
                observer.complete();
            }, (error:any) => {
                console.error('Geolocation error!');
                observer.error(error);
            });
        });
    }

    reverseGeocode(lat:number, lng:number) : Observable<string> {
        var url = [GEOCODING_URL, `latlng=${lat},${lng}`].join('?');
        return this.http.get(url).map((res:Response) => {
            return res.json().results[0].formatted_address;
        });
    }

    geocode(address:string) : Observable<Coordinates> {
        var url = [GEOCODING_URL, `address=${address}`].join('?');
        return this.http.get(url).map((res:Response) => {
            let location = res.json().results[0].geometry.location;
            return new Coordinates(location.lat, location.lng);
        });
    }

}
