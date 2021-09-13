import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { databseUrl } from 'src/config/firebase';
import { Recipe } from 'src/model/recipe';

@Injectable()
export class RecipesService {
  updatedRecipes = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];

  constructor(private http: HttpClient) {}

  fetchAllRecipes() {
    return this.http.get<Recipe[]>(databseUrl('recipes')).pipe(
      tap((recipes) => {
        this.setAllRecipes(recipes);
      })
    );
  }

  setAllRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.updatedRecipes.next(this.recipes.slice());
  }

  getAllRecipes() {
    const copyOfRecipes = [...this.recipes];
    return copyOfRecipes;
  }

  getSelectedRecipe(recipeId: string) {
    return this.recipes.find((recipe: Recipe) => recipe.id === recipeId);
  }

  addNewRecipe(recipe: Recipe) {
    this.recipes.unshift(recipe);
    this.updatedRecipes.next(this.recipes.slice());
  }

  updateSelectedRecipe(updatedRecipe: Recipe) {
    const { id } = updatedRecipe;
    const index = this.recipes.findIndex((recipe: Recipe) => recipe.id === id);
    this.recipes[index] = updatedRecipe;
    this.updatedRecipes.next(this.recipes.slice());
  }

  deleteSelectedRecipe(id: string) {
    const index = this.recipes.findIndex((recipe: Recipe) => recipe.id === id);
    this.recipes.splice(index, 1);
    this.updatedRecipes.next(this.recipes.slice());
  }
}
