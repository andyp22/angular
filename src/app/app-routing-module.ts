import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { MealsComponent } from './meals/meals.component';

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
    component: UnderConstructionComponent
  },
  { // Open the weekly planner showing the specified week
    path: 'planner/:week',
    component: UnderConstructionComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
