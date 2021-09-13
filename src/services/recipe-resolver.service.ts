import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Recipe } from 'src/model/recipe';
import { RecipesService } from './recipes.service';

@Injectable({ providedIn: 'root' })
export class RecipeResolver implements Resolve<Recipe[]> {
  constructor(private recipeService: RecipesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.getAllRecipes();
    if (recipes.length === 0) {
      return this.recipeService.fetchAllRecipes();
    } else {
      return recipes;
    }
  }
}
