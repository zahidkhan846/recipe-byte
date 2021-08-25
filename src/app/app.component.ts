import { Component } from '@angular/core';
import { Recipe } from 'src/model/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentComponent: string = 'recipe';
  recipeDetail: Recipe = null;

  onNevigate(componentName: string) {
    this.currentComponent = componentName;
  }

  onSetDetail(selectedRecipe: Recipe) {
    this.recipeDetail = selectedRecipe;
  }

  onClose(recipe: Recipe) {
    this.recipeDetail = recipe;
  }
}
