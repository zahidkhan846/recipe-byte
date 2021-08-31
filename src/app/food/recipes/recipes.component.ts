import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/services/recipes.service';
import { Recipe } from '../../../model/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];
  recipeDetail: Recipe = null;

  constructor(private recipeService: RecipesService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getAllRecipes();
    this.recipeService.getSelectedRecipe.subscribe((id: string) => {
      this.recipeDetail = this.recipeService
        .getAllRecipes()
        .find((r) => r.id === id);
    });
  }

  onClose(recipe: Recipe) {
    this.recipeDetail = recipe;
  }
}
