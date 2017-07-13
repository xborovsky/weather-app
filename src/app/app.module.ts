import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherService } from './weather.service';
import { LocationService } from './location.service';
import { ConverterService } from './converter.service';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [WeatherService, LocationService, ConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
