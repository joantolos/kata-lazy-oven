import {inject, TestBed} from '@angular/core/testing';

import {LazyOvenService} from './lazy-oven.service';
import {HttpClientModule} from "@angular/common/http";
import {Time} from "../entities/time";

describe('Lazy oven service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LazyOvenService],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([LazyOvenService], (service: LazyOvenService) => {
    expect(service).toBeTruthy();
  }));

  it('should substract times', inject([LazyOvenService], (service: LazyOvenService) => {
    expect(service.substractTimes('22:00', '00:15')).toEqual(new Time('21', '45'));
  }));
});
