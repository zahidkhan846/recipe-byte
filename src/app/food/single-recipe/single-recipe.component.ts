import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/model/recipe';
import { RecipesService } from 'src/services/recipes.service';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css'],
})
export class SingleRecipeComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {}

  onSelect(id: string) {
    this.recipeService.getSelectedRecipe.emit(id);
  }
}
