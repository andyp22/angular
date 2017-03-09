import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

import { MealCardComponent } from './meal-card/meal-card.component';

import { MealsComponent } from './meals/meals.component';
import { MealService } from './meals/meal.service';
import { WeekService } from './weeks/week.service';
import { PlannerComponent } from './planner/planner.component';
import { MealScreenComponent } from './meal-screen/meal-screen.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    UnderConstructionComponent,
    MealsComponent,
    PlannerComponent,
    MealScreenComponent,
    MealCardComponent
  ],
  providers: [
    MealService,
    WeekService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
