import { Subject } from 'rxjs';
import { Ingredient } from 'src/model/ingredient';
import { Recipe } from 'src/model/recipe';

export class RecipesService {
  updatedRecipes = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      '1',
      'Cheese Corn Pizza',
      "Prepared using pizza dough, sauce, corn, mozzarella, parmesan, and cheddar cheese, this recipe is a pizza lover's dream come true.",
      'https://images.pexels.com/photos/262977/pexels-photo-262977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      [
        new Ingredient(new Date().toISOString(), 'Doe', 1),
        new Ingredient(new Date().toISOString(), 'Tomato', 1),
      ]
    ),
    new Recipe(
      '2',
      'Burger',
      'Hamburger, a burger consisting of one or more cooked patties of ground beef, placed inside a sliced bread roll or bun.',
      'https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      [
        new Ingredient(new Date().toISOString(), 'Bun', 1),
        new Ingredient(new Date().toISOString(), 'Meat', 1),
        new Ingredient(new Date().toISOString(), 'Fries', 10),
      ]
    ),
  ];

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
