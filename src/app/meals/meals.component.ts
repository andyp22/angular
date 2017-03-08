import { Component, OnInit } from '@angular/core';

import { Meal } from './meal';
import { MealService } from './meal.service';

@Component({
  selector: 'app-component-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})

export class MealsComponent implements OnInit {
  title = 'This Week\' Meals';
  meals: Meal[];

  constructor(private mealService: MealService) { }

  ngOnInit(): void {
    this.getMeals();
  }

  getMeals(): void {
    this.mealService.getMeals()
      .then(meals => this.meals = meals.splice(0,7));
  }
}
