import {Component, Input, OnInit} from '@angular/core';
import { Settings } from '../../entities/settings';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
  }

  add(eating: string, cooking: string): void {
    this.settingsService.addRecipe({ eating, cooking } as Settings);
  }

}
