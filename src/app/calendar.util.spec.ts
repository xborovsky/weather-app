/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CalendarUtil} from './calendar.util';

describe('CalendarUtil', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarUtil]
    });
  });

  it('should return current day name', inject([CalendarUtil], (service: CalendarUtil) => {
    spyOn(service, 'getCurrentDay').and.returnValue('1');
    expect(service.getCurrentDayName()).toBe('Mon');
  }));

  it('should return next day name', inject([CalendarUtil], (service: CalendarUtil) => {
    spyOn(service, 'getCurrentDay').and.returnValue('2');
    expect(service.getNextDayName(2)).toBe("Thu");
  }));

  it('should return next day name 2', inject([CalendarUtil], (service: CalendarUtil) => {
    spyOn(service, 'getCurrentDay').and.returnValue('3');
    expect(service.getNextDayName(7)).toBe("Wed");
  }));
});
 