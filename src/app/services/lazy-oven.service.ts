import { Injectable } from '@angular/core';
import { Settings } from '../entities/settings';
import { Recipe } from '../entities/recipe';
import { defaultSettings } from '../config/config';
import { defaultRecipe } from '../config/config';
import { Time } from '../entities/time';

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
    this.recipe.start = new Time('333', '112312');
    this.recipe.insert = new Time('333', '112312');
    this.recipe.out = new Time('333', '112312');
    this.recipe.end = new Time('333', '112312');
    return this.recipe;
  }

  addTimes(start: string, end: string) {
    const starts = start.split(":");
    const startsSeconds = (+starts[0]) * 60 * 60 + (+starts[1]) * 60 + (+starts[2]);
    const ends = end.split(":");
    const endsSeconds = (+ends[0]) * 60 * 60 + (+ends[1]) * 60 + (+ends[2]);

    const date = new Date(1970,0,1);
    date.setSeconds(startsSeconds + endsSeconds);

    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
  }

  substractTimes(start: string, end: string) {
    const starts = start.split(":");
    const startsSeconds = (+starts[0]) * 60 * 60 + (+starts[1]) * 60 + (+starts[2]);
    const ends = end.split(":");
    const endsSeconds = (+ends[0]) * 60 * 60 + (+ends[1]) * 60 + (+ends[2]);

    const date = new Date(1970,0,1);
    date.setSeconds(startsSeconds - endsSeconds);

    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
  }
}
