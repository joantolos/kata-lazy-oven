import {inject, TestBed} from '@angular/core/testing';

import {LazyOvenService} from './lazy-oven.service';
import {HttpClientModule} from "@angular/common/http";

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

  it('should add times', inject([LazyOvenService], (service: LazyOvenService) => {
    expect(service.addTimes('22:00:00', '00:15:00')).toBe('22:15:00');
  }));

  it('should substract times', inject([LazyOvenService], (service: LazyOvenService) => {
    expect(service.substractTimes('22:00:00', '00:15:00')).toBe('21:45:00');
  }));
});
