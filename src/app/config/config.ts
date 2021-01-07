import { Settings } from '../entities/settings';
import { Recipe } from '../entities/recipe';

export const defaultSettings: Settings = {
  eat: {
    hours: '22',
    minutes: '00'
  },
  cook: {
    hours: '00',
    minutes: '15'
  },
  heat: '10',
  cool: '05'
};

export const defaultRecipe: Recipe = {
  start: {
    hours: '21',
    minutes: '30'
  },
  insert: {
    hours: '21',
    minutes: '40'
  },
  out: {
    hours: '21',
    minutes: '55'
  },
  end: {
    hours: '22',
    minutes: '00'
  }
};

export const hoursConfig = [
  '00',
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23'
];

export const minutesConfig = [
  '00',
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
  '32',
  '33',
  '34',
  '35',
  '36',
  '37',
  '38',
  '39',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
  '48',
  '49',
  '50',
  '51',
  '52',
  '53',
  '54',
  '55',
  '56',
  '57',
  '58',
  '59',
  '60'
];
