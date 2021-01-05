import {inject, TestBed} from '@angular/core/testing';

import {SettingsService} from './settings.service';
import {HttpClientModule} from "@angular/common/http";

describe('Lazy oven service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingsService],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([SettingsService], (service: SettingsService) => {
    expect(service).toBeTruthy();
  }));
});
