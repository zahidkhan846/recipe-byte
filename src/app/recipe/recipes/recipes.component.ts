import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipesService } from 'src/services/recipes.service';
import { Recipe } from '../../../model/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  recipeSub: Subscription;

  constructor(private recipeService: RecipesService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getAllRecipes();
    this.recipeSub = this.recipeService.updatedRecipes.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
  }

  ngOnDestroy() {
    this.recipeSub.unsubscribe();
  }

  hasRecipes() {
    return this.recipes.length > 0;
  }
}
