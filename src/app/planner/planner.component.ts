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
        this.plannerBays.concat(this.currentWeek.meals);
        for (let i = 0; i < 7; i++) {
          this.plannerBays.push((this.currentWeek.meals[i]) ? this.currentWeek.meals[i] : { id: -1 });
        }
      });
  }

  getMeals(): void {
    this.mealService.getMeals()
      .then(meals => {
        this.meals = meals;
        this.sortMeals();
      });
  }

  allowDrop(): boolean {
    let allow = false;
    this.plannerBays.forEach((bay: Meal) => {
      if(bay.id === -1) {
        allow = true;
      }
    });
    return allow;
  }

  addToPlanner($evt: any): void {
    if (!this.allowDrop()) { return; }
    for (let i = 0; i < this.plannerBays.length; i++) {
      if(this.plannerBays[i].id === -1) {
        this.plannerBays.splice(i, 1);
        break;
      }
    }
    this.plannerBays.push($evt.dragData);
    this.sortBays();
  }

  sortMeals(): void {
    this.meals.sort((a: Meal, b: Meal) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }

  sortBays(): void {
    this.plannerBays.sort((a: Meal, b: Meal) => {
      if (a.id === -1) {
        return 1;
      }
      if (b.id === -1) {
        return -1;
      }
      return 0;
    });
  }

  removeBay(index: number): void {
    this.plannerBays.splice(index, 1);
    this.plannerBays.push({ id: -1 });
    this.sortBays();
  }
}
