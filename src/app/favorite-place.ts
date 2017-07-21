import { Coordinates } from './coordinates';

export class FavoritePlace {
    private address:string;
    private coordinates:Coordinates;

    constructor(address:string, coordinates:Coordinates) {
        this.address = address;
        this.coordinates = coordinates;
    }

    public getAddress():string {
        return this.address;
    }

    public getCoordinates():Coordinates {
        return this.coordinates;
    }
}
