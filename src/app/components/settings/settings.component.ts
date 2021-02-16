import {AfterViewInit, Component } from '@angular/core';
import { Settings } from '../../entities/settings';
import { LazyOvenService } from '../../services/lazy-oven.service';
import { Time } from "../../entities/time";
import { defaultSettings } from '../../config/config';
import { hoursConfig } from '../../config/config';
import { minutesConfig } from '../../config/config';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements AfterViewInit {

  ngAfterViewInit() {
  }

  hours = hoursConfig;
  minutes = minutesConfig;

  selectedEatHours: string = defaultSettings.eat.hours;
  selectedEatMinutes: string = defaultSettings.eat.minutes;
  selectedCookHours: string = defaultSettings.cook.hours;
  selectedCookMinutes: string = defaultSettings.cook.minutes;

  constructor(private lazyOvenService: LazyOvenService) { }

  add(): void {
    const settings = new Settings(
      new Time(this.selectedEatHours, this.selectedEatMinutes),
      new Time(this.selectedCookHours, this.selectedCookMinutes),
      defaultSettings.heat,
      defaultSettings.cool);

    this.lazyOvenService.addSettings(settings);
  }

}
