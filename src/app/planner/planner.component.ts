import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { MealService } from '../meals/meal.service';
import { Meal } from '../meals/meal';
import { WeekService } from '../weeks/week.service';
import { Week } from '../weeks/week';

@Component({
  selector: 'app-component-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})

export class PlannerComponent implements OnInit {
  title = 'Meal Planner';
  currentWeek: Week;
  meals: Meal[] = [];
  plannerBays = [];

  constructor(
    private mealService: MealService,
    private weekService: WeekService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.getMeals();
    this.route.params
      .switchMap((params: Params) => this.weekService.getWeek(+params['week']))
      .subscribe((week) => {
        this.currentWeek = week;
        console.log(this.currentWeek.meals);
        this.plannerBays.concat(this.currentWeek.meals);
        console.log(this.plannerBays.length);
        //if (this.plannerBays.length < 7) {
          console.log('adding bays');
          for (let i = 0; i < 7; i++) {
            console.log(i);
            this.plannerBays.push((this.currentWeek.meals[i]) ? this.currentWeek.meals[i] : { id: -1 });
          }
        //}
        console.log(this.plannerBays.length);
      });
  }

  getMeals(): void {
    this.mealService.getMeals()
      .then(meals => this.meals = meals.sort((a: Meal, b: Meal) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }));
  }
}
