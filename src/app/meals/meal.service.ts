import { Injectable } from '@angular/core';

import { LocalStorageService } from '../services/localStorage.service';

import { Meal } from './meal';
import { MEALS } from './mock-meals';

@Injectable()
export class MealService extends LocalStorageService {
  constructor() {
    super();
    this.localStorageName = 'meals';
    this.defaultData = [].concat(MEALS);
  }

  getMeals(): Promise<Meal[]> {
    return Promise.resolve([].concat(this.getLocalStorage()));
  }

  getMeal(id: number): Promise<Meal> {
    return this.getMeals()
        .then(meals => meals.find(meal => meal.id === id));
  }

  saveMeal(meal: Meal): void {
    const meals: Meal[] = this.getLocalStorage();
    const index: number =  meals.findIndex(m => m.id === meal.id);
    if(index > -1) {
      meals[index] = meal;
    } else {
      meals.push(meal);
    }
    this.saveLocalStorage(meals);
  }
}
