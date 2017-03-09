import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { MealService } from '../meals/meal.service';
import { Meal } from '../meals/meal';

@Component({
  selector: 'app-component-meal-screen',
  templateUrl: './meal-screen.component.html',
  styleUrls: ['./meal-screen.component.css']
})

export class MealScreenComponent implements OnInit {
  title = 'Meal Screen';
  meal: Meal;

  constructor(
    private mealService: MealService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.mealService.getMeal(+params['id']))
      .subscribe(meal => this.meal = meal);
  }

  goBack() {
    this.location.back();
  }
}
