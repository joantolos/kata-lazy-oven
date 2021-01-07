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
});
