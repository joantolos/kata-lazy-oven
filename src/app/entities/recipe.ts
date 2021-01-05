export class Recipe {
  start: string;
  mealIn: string;
  mealOut: string;
  end: string;

  constructor(start: string, mealIn: string, mealOut: string, end: string) {
    this.start = start;
    this.mealIn = mealIn;
    this.mealOut = mealOut;
    this.end = end;
  }
}
