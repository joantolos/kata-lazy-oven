import { Time } from './time';

export class Recipe {

  start: Time;
  insert: Time;
  out: Time;
  end: Time;

  constructor(start: Time, insert: Time, out: Time, end: Time) {
    this.start = start;
    this.insert = insert;
    this.out = out;
    this.end = end;
  }
}
