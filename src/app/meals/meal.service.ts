import { Injectable } from '@angular/core';

import { Meal } from './meal';
import { MEALS } from './mock-meals';

@Injectable()
export class MealService {
  LOCAL_STORAGE_NAME = 'meals';
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
    this.saved = (localStorage.getItem(this.LOCAL_STORAGE_NAME) !== null) ?
      JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_NAME)) : [].concat(MEALS);
    return this.saved;
  }

  saveLocalStorageMeals(meals: Meal[]): void {
    localStorage.setItem(this.LOCAL_STORAGE_NAME, JSON.stringify(meals));
  }
}
