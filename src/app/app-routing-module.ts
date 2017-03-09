import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { MealsComponent } from './meals/meals.component';
import { PlannerComponent } from './planner/planner.component';
import { MealScreenComponent } from './meal-screen/meal-screen.component';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/meals',
    pathMatch: 'full'
  },
  { // View meals planned out by week
    path: 'meals',
    component: MealsComponent
  },
  { // View/Edit single meal
    path: 'meal/:id',
    component: MealScreenComponent
  },
  { // Open the weekly planner showing the specified week
    path: 'planner/:week',
    component: PlannerComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
