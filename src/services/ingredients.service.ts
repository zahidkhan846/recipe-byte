import { Ingredient } from 'src/model/ingredient';

export class IngredientsService {
  private ingredients: Ingredient[] = [
    new Ingredient('Cheese', 2),
    new Ingredient('Tomato', 1),
  ];

  getAllIngredients() {
    const copyOfIngredients = [...this.ingredients];
    return copyOfIngredients;
  }
}
