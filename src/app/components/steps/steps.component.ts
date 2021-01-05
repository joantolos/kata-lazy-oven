import {Component, OnInit} from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { Settings } from "../../entities/settings";
import {Recipe} from "../../entities/recipe";

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {

  recipe: Recipe;

  ngOnInit() {
    this.getRecipe();
  }

  constructor(private settingsService: SettingsService) {
    this.recipe = new Recipe('21:30', '21:40', '21:55', '22:00')
  }

  getRecipe() {
    const settings: Settings = this.settingsService.getRecipe() || { eating: '0', cooking: '0' };
    return this.recipe;
  }

}
