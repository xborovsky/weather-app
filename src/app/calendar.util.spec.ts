/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CalendarUtil} from './calendar.util';

describe('CalendarUtil', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarUtil]
    });
  });

  it('should ...', inject([CalendarUtil], (service: CalendarUtil) => {
    expect(service).toBeTruthy();
  }));
});
