/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WeekForecastComponent } from './week-forecast.component';

describe('WeekForecastComponent', () => {
  let component: WeekForecastComponent;
  let fixture: ComponentFixture<WeekForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
