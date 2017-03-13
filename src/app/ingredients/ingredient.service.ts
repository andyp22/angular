import { Injectable } from '@angular/core';

import { LocalStorageService } from '../services/localStorage.service';

import { Ingredient } from './ingredients';
import { INGREDIENTS } from './mock-ingredients';

@Injectable()
export class IngredientService extends LocalStorageService {

  constructor() {
    super();
    this.localStorageName = 'ingredients';
    this.defaultData = [].concat(INGREDIENTS);
  }

  getIngredients(): Promise<Ingredient[]> {
    return Promise.resolve(this.getLocalStorage());
  }

  getIngredient(id: number): Promise<Ingredient> {
    return this.getIngredients()
        .then(ingredients => ingredients.find(ingredient => ingredient.id === id));
  }

  saveIngredient(ingredient: Ingredient): void {
    const ingredients: Ingredient[] = this.getLocalStorage();
    const index: number =  ingredients.findIndex(m => m.id === ingredient.id);
    if(index > -1) {
      ingredients[index] = ingredient;
    } else {
      ingredients.push(ingredient);
    }
    this.saveLocalStorage(ingredients);
  }
}
