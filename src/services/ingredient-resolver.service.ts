import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Ingredient } from 'src/model/ingredient';
import { IngredientsService } from './ingredients.service';

@Injectable({ providedIn: 'root' })
export class IngredientResolver implements Resolve<Ingredient[]> {
  constructor(private ingredientService: IngredientsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.ingredientService.getAllIngredients();
    if (recipes.length === 0) {
      return this.ingredientService.getAllIngredients();
    } else {
      return recipes;
    }
  }
}
