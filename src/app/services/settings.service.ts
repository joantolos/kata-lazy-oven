import { Injectable } from '@angular/core';
import { Settings } from '../entities/settings';

@Injectable()
export class SettingsService {

  settings: Settings | undefined;

  constructor() {
  }

  addRecipe(recipe: Settings) {
    this.settings = recipe;
  }

  getRecipe() {
    return this.settings;
  }
}
