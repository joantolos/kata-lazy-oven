import { Time } from './time';

export class Settings {

  eat: Time;
  cook: Time;
  heat: string;
  cool: string;

  constructor(eat: Time, cook: Time, heat: string, cool: string) {
    this.eat = eat;
    this.cook = cook;
    this.heat = heat;
    this.cool = cool;
  }
}
