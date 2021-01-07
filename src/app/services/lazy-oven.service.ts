import { Injectable } from '@angular/core';
import { Settings } from '../entities/settings';
import { Recipe } from '../entities/recipe';
import { defaultSettings } from '../config/config';
import { defaultRecipe } from '../config/config';

@Injectable()
export class LazyOvenService {

  settings: Settings;
  recipe: Recipe;

  constructor() {
    this.settings = defaultSettings;
    this.recipe = defaultRecipe;
  }

  addSettings(settings: Settings) {
    this.settings = settings;
  }

  getRecipe() {
    console.log('########### Settings: ' + JSON.stringify(this.settings));
    return this.recipe;
  }
}
