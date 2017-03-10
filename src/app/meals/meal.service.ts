import { Injectable } from '@angular/core';

import { Meal } from './meal';
import { MEALS } from './mock-meals';

@Injectable()
export class MealService {
  saved: Meal[] = [];

  getMeals(): Promise<Meal[]> {
    return Promise.resolve([].concat(this.getLocalStorageMeals()));
  }

  getMeal(id: number): Promise<Meal> {
    return this.getMeals()
        .then(meals => meals.find(meal => meal.id === id));
  }

  saveMeal(meal: Meal): void {
    const meals: Meal[] = this.getLocalStorageMeals();
    const index: number =  meals.findIndex(m => m.id === meal.id);
    if(index > -1) {
      meals[index] = meal;
    } else {
      meals.push(meal);
    }
    this.saveLocalStorageMeals(meals);
  }

  getLocalStorageMeals(): Meal[] {
    this.saved = (localStorage.getItem('meals') !== null) ? JSON.parse(localStorage.getItem('meals')) : [].concat(MEALS);
    return this.saved;
  }

  saveLocalStorageMeals(meals: Meal[]): void {
    localStorage.setItem('meals', JSON.stringify(meals));
  }
}
