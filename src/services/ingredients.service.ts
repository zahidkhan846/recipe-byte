import { Subject } from 'rxjs';
import { Ingredient } from 'src/model/ingredient';

export class IngredientsService {
  updatedIngredients = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('1', 'Cheese', 2),
    new Ingredient('2', 'Bun', 2),
  ];

  getAllIngredients() {
    const copyOfIngredients = [...this.ingredients];
    return copyOfIngredients;
  }

  addNewIngredient(newIng: Ingredient) {
    this.ingredients.push(newIng);
    this.updatedIngredients.next(this.ingredients.slice());
  }

  addIngredients(newIngs: Ingredient[]) {
    this.ingredients.push(...newIngs);
    this.updatedIngredients.next(this.ingredients.slice());
  }

  getSelectedIngredient(ingId: string) {
    return this.ingredients.find(
      (ingredient: Ingredient) => ingredient.id === ingId
    );
  }

  removeSelectedIngredient(ingId: string) {}

  updateSelectedIngredient(ing: Ingredient) {}
}
