/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConverterService } from './converter.service';

describe('ConverterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConverterService]
    });
  });

  it('should correctly convert farenheit to celsius', inject([ConverterService], (service: ConverterService) => {
    expect(service.farehnheitToCelsius(100)).toEqual(37.77777777777778);
    expect(service.farehnheitToCelsius(0)).toEqual(-17.77777777777778);
  }));
});
