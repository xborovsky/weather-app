export class WeatherBuilder {
    
    private temperature:number;
    private temperatureMin:number;
    private temperatureMax:number;
    private icon:string;
    private humidity:number;
    private summary:string;
    private windSpeed:number;
    private timezone:string;
    private cloudCover:number;

    getTemperature():number {
        return this.temperature;
    }
    
    setTemperature(temperature:number):WeatherBuilder {
        this.temperature = temperature;
        return this;
    }

    getTemperatureMin():number {
        return this.temperatureMin;
    }
    
    setTemperatureMin(temperatureMin:number):WeatherBuilder {
        this.temperatureMin = temperatureMin;
        return this;
    }

    getTemperatureMax():number {
        return this.temperatureMax;
    }
    
    setTemperatureMax(temperatureMax:number):WeatherBuilder {
        this.temperatureMax = temperatureMax;
        return this;
    }
    
    getIcon():string {
        return this.icon;
    }
    
    setIcon(icon:string):WeatherBuilder {
        this.icon = icon;
        return this;
    }
    
    getHumidity():number {
        return this.humidity;
    }
    
    setHumidity(humidity:number):WeatherBuilder {
        this.humidity = humidity;
        return this;
    }
    
    getSummary():string {
        return this.summary;
    }
    
    setSummary(summary:string):WeatherBuilder {
        this.summary = summary;
        return this;
    }
    
    getWindSpeed():number {
        return this.windSpeed;
    }
    
    setWindSpeed(windSpeed:number):WeatherBuilder {
        this.windSpeed = windSpeed;
        return this;
    }
    
    getTimezone():string {
        return this.timezone;
    }
    
    setTimezone(timezone:string):WeatherBuilder {
        this.timezone = timezone;
        return this;
    }

    getCloudCover():number {
        return this.cloudCover;
    }

    setCloudCover(cloudCover:number):WeatherBuilder {
        this.cloudCover = cloudCover;
        return this;
    }
    
    build():Weather {
        return new Weather(this);
    }
    
}

export class Weather {
    private temperature:number;
    private temperatureMin:number;
    private temperatureMax:number;
    private icon:string;
    private humidity:number;
    private summary:string;
    private windSpeed:number;
    private timezone:string;
    private cloudCover:number;
    
    constructor(builder:WeatherBuilder) {
        this.temperature = builder.getTemperature();
        this.temperatureMin = builder.getTemperatureMin();
        this.temperatureMax = builder.getTemperatureMax();
        this.icon = builder.getIcon();
        this.humidity = builder.getHumidity();
        this.summary = builder.getSummary();
        this.windSpeed = builder.getWindSpeed();
        this.timezone = builder.getTimezone();
        this.cloudCover = builder.getCloudCover();
    }
    
    getTemerature():number {
        return this.temperature;
    }

    getTemeratureMin():number {
        return this.temperatureMin;
    }

    getTemeratureMax():number {
        return this.temperatureMax;
    }
    
    getIcon():string {
        return this.icon;
    }
    
    getHumidity():number {
        return this.humidity;
    }
    
    getSummary():string {
        return this.summary;
    }
    
    getWindSpeed():number {
        return this.windSpeed;
    }
    
    getTimezone():string {
        return this.timezone;
    }

    getCloudCover():number {
        return this.cloudCover;
    }
}
