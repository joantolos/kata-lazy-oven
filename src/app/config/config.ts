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

export const hoursConfig = [
  {value: 0, viewValue: '00'},
  {value: 1, viewValue: '01'},
  {value: 2, viewValue: '02'},
  {value: 3, viewValue: '03'},
  {value: 4, viewValue: '04'},
  {value: 5, viewValue: '05'},
  {value: 6, viewValue: '06'},
  {value: 7, viewValue: '07'},
  {value: 8, viewValue: '08'},
  {value: 9, viewValue: '09'},
  {value: 10, viewValue: '10'},
  {value: 11, viewValue: '11'},
  {value: 12, viewValue: '12'},
  {value: 13, viewValue: '13'},
  {value: 14, viewValue: '14'},
  {value: 15, viewValue: '15'},
  {value: 16, viewValue: '16'},
  {value: 17, viewValue: '17'},
  {value: 18, viewValue: '18'},
  {value: 19, viewValue: '19'},
  {value: 20, viewValue: '20'},
  {value: 21, viewValue: '21'},
  {value: 22, viewValue: '22'},
  {value: 23, viewValue: '23'}
];

export const minutesConfig = [
  { value: 0, viewValue: '00' },
  { value: 1, viewValue: '01' },
  { value: 2, viewValue: '02' },
  { value: 3, viewValue: '03' },
  { value: 4, viewValue: '04' },
  { value: 5, viewValue: '05' },
  { value: 6, viewValue: '06' },
  { value: 7, viewValue: '07' },
  { value: 8, viewValue: '08' },
  { value: 9, viewValue: '09' },
  { value: 10, viewValue: '10' },
  { value: 11, viewValue: '11' },
  { value: 12, viewValue: '12' },
  { value: 13, viewValue: '13' },
  { value: 14, viewValue: '14' },
  { value: 15, viewValue: '15' },
  { value: 16, viewValue: '16' },
  { value: 17, viewValue: '17' },
  { value: 18, viewValue: '18' },
  { value: 19, viewValue: '19' },
  { value: 20, viewValue: '20' },
  { value: 21, viewValue: '21' },
  { value: 22, viewValue: '22' },
  { value: 23, viewValue: '23' },
  { value: 24, viewValue: '24' },
  { value: 25, viewValue: '25' },
  { value: 26, viewValue: '26' },
  { value: 27, viewValue: '27' },
  { value: 28, viewValue: '28' },
  { value: 29, viewValue: '29' },
  { value: 30, viewValue: '30' },
  { value: 31, viewValue: '31' },
  { value: 32, viewValue: '32' },
  { value: 33, viewValue: '33' },
  { value: 34, viewValue: '34' },
  { value: 35, viewValue: '35' },
  { value: 36, viewValue: '36' },
  { value: 37, viewValue: '37' },
  { value: 38, viewValue: '38' },
  { value: 39, viewValue: '39' },
  { value: 40, viewValue: '40' },
  { value: 41, viewValue: '41' },
  { value: 42, viewValue: '42' },
  { value: 43, viewValue: '43' },
  { value: 44, viewValue: '44' },
  { value: 45, viewValue: '45' },
  { value: 46, viewValue: '46' },
  { value: 47, viewValue: '47' },
  { value: 48, viewValue: '48' },
  { value: 49, viewValue: '49' },
  { value: 50, viewValue: '50' },
  { value: 51, viewValue: '51' },
  { value: 52, viewValue: '52' },
  { value: 53, viewValue: '53' },
  { value: 54, viewValue: '54' },
  { value: 55, viewValue: '55' },
  { value: 56, viewValue: '56' },
  { value: 57, viewValue: '57' },
  { value: 58, viewValue: '58' },
  { value: 59, viewValue: '59' },
  { value: 60, viewValue: '60' }
];
