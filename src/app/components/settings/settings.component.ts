import { Component, OnInit } from '@angular/core';
import { Settings } from '../../entities/settings';
import { LazyOvenService } from '../../services/lazy-oven.service';
import { Time } from "../../entities/time";
import { defaultSettings } from '../../config/config';
import { hours } from '../../config/config';
import { minutes } from '../../config/config';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  selectedEatHours: number = defaultSettings.eat.hours;
  selectedEatMinutes: number = defaultSettings.eat.minutes;
  hours = hours;
  minutes = minutes;

  constructor(private lazyOvenService: LazyOvenService) { }

  ngOnInit(): void {
  }

  add(): void {
    const settings = new Settings(
      new Time(this.selectedEatHours, this.selectedEatMinutes),
      new Time(this.selectedEatHours, this.selectedEatMinutes),
      defaultSettings.heat,
      defaultSettings.cool);

    this.lazyOvenService.addSettings(settings);
  }

}
