import { Injectable } from '@angular/core';

@Injectable()
export class ConverterService {

  farehnheitToCelsius(tempFarenheit : number) : number {
      return (tempFarenheit - 32) * 5/9;
  }

}
