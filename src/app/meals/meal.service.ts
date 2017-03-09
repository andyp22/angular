import { Injectable } from '@angular/core';

import { Meal } from './meal';
import { MEALS } from './mock-meals';

@Injectable()
export class MealService {
  getMeals(): Promise<Meal[]> {
    return Promise.resolve([].concat(MEALS));
  }

  getMeal(id: number): Promise<Meal> {
    return this.getMeals()
        .then(meals => meals.find(meal => meal.id === id));
  }
}
