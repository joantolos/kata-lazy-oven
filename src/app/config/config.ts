import { Settings } from '../entities/settings';
import { Recipe } from '../entities/recipe';

export const defaultSettings: Settings = {
  eat: {
    hours: 22,
    minutes: 0
  },
  cook: {
    hours: 0,
    minutes: 15
  },
  heat: 10,
  cool: 5
};

export const defaultRecipe: Recipe = {
  start: {
    hours: 21,
    minutes: 30
  },
  insert: {
    hours: 21,
    minutes: 40
  },
  out: {
    hours: 21,
    minutes: 55
  },
  end: {
    hours: 22,
    minutes: 0
  }
};
