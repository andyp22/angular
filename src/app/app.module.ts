import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

import { MealsComponent } from './meals/meals.component';
import { MealService } from './meals/meal.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    UnderConstructionComponent,
    MealsComponent
  ],
  providers: [
    MealService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
