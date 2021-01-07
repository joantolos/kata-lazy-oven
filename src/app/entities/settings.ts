import { Time } from './time';

export class Settings {

  eat: Time;
  cook: Time;
  heat: number;
  cool: number;

  constructor(eat: Time, cook: Time, heat: number, cool: number) {
    this.eat = eat;
    this.cook = cook;
    this.heat = heat;
    this.cool = cool;
  }
}
