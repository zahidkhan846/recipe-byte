import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/model/recipe';
import { RecipesService } from 'src/services/recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  currentComponent: string = 'shop';
  recipeDetail: Recipe = null;

  constructor(private recipeService: RecipesService) {}

  ngOnInit() {
    this.recipeService.getSelectedRecipe.subscribe((id: string) => {
      this.recipeDetail = this.recipeService
        .getAllRecipes()
        .find((r) => r.id === id);
    });
  }

  onNevigate(componentName: string) {
    this.currentComponent = componentName;
  }

  onClose(recipe: Recipe) {
    this.recipeDetail = recipe;
  }
}
