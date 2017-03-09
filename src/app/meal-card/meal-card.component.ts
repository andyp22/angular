import { Component, Input } from '@angular/core';

import { Meal } from '../meals/meal';

@Component({
  selector: 'app-component-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.css']
})

export class MealCardComponent {
  @Input()
  meal: Meal;
}
