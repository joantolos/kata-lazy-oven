import { Component, OnInit } from '@angular/core';
import { Settings } from '../../entities/settings';
import { LazyOvenService } from '../../services/lazy-oven.service';
import { Time } from "../../entities/time";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private lazyOvenService: LazyOvenService) { }

  ngOnInit(): void {
  }

  add(eatHours: number, eatMinutes: number, cookHours: number, cookMinutes: number, heat: number, cool: number): void {
    const settings = new Settings(
      new Time(eatHours, eatMinutes),
      new Time(cookHours, cookMinutes),
      heat,
      cool);

    this.lazyOvenService.addSettings(settings);
  }

}
