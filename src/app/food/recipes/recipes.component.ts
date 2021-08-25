import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../../model/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      '1',
      'Cheese Corn Pizza',
      "Prepared using pizza dough, sauce, corn, mozzarella, parmesan, and cheddar cheese, this recipe is a pizza lover's dream come true.",
      'https://images.pexels.com/photos/262977/pexels-photo-262977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    ),
    new Recipe(
      '2',
      'Burger',
      'Hamburger, a burger consisting of one or more cooked patties of ground beef, placed inside a sliced bread roll or bun.',
      'https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
    ),
  ];

  @Output() recipeDetail = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  showRecipeDetail(selectedRecipeId: string) {
    const selectedRecipe = this.recipes.find(
      (recipe) => recipe.id === selectedRecipeId
    );
    this.recipeDetail.emit(selectedRecipe);
  }
}
