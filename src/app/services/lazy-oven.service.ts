import {Injectable} from '@angular/core';
import {Settings} from '../entities/settings';
import {Recipe} from '../entities/recipe';
import {defaultRecipe, defaultSettings} from '../config/config';
import {Time} from '../entities/time';

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
    const end = new Time(this.settings.eat.hours, this.settings.eat.minutes);
    const out = this.substractTimes(this.toText(this.settings.eat), '00:' + this.settings.cool + ':00');
    const insert = this.substractTimes(this.toText(out), this.toText(this.settings.cook));
    const start = this.substractTimes(this.toText(insert), '00:' + this.settings.heat + ':00');

    return new Recipe(start, insert, out, end);
  }

  substractTimes(start: string, end: string): Time {
    const starts = start.split(':');
    const startsSeconds = (+starts[0]) * 60 * 60 + (+starts[1]) * 60 + (+starts[2]);
    const ends = end.split(':');
    const endsSeconds = (+ends[0]) * 60 * 60 + (+ends[1]) * 60 + (+ends[2]);
    const date = new Date(1970, 0, 1);
    date.setSeconds(startsSeconds - endsSeconds);
    const dateString = date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1").slice(0, -3);
    return new Time(dateString.split(':')[0], dateString.split(':')[1]);
  }

  private toText(time: Time) {
    return time.hours + ':' + time.minutes + ':00';
  }

}
