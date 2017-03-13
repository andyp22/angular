import { Ingredient } from '../ingredients/ingredients';

export interface Meal {
  id: number;
  name: string;
  ingredients?: number[];
}
