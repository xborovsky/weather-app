import { Injectable } from '@angular/core';

export class CalendarUtil {

  private dayNames = {
    0: {
      short: 'Sun',
      full : 'Sunday'
    },
    1: {
      short: 'Mon',
      full : 'Monday'
    },
    2: {
      short: 'Tue',
      full : 'Tuesday'
    },
    3: {
      short: 'Wed',
      full : 'Wedneday'
    },
    4: {
      short: 'Thu',
      full : 'Thursday'
    },
    5: {
      short: 'Fri',
      full : 'Friday'
    },
    6: {
      short: 'Sat',
      full : 'Saturday'
    }
  };

  constructor() { }

  // TODO full names should be used in week detail view
  getCurrentDayName():string {
    return this.dayNames[this.getCurrentDay()].short;
  }

  getNextDayName(nextDay:number):string {
    return this.dayNames[(this.getCurrentDay() + nextDay) % 7].short;
  }

  private getCurrentDay() { // for tests
    return new Date().getDay();
  }

}
