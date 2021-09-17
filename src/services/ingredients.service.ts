import { Subject } from 'rxjs';
import { Ingredient } from 'src/model/ingredient';

export class IngredientsService {
  updatedIngredients = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [new Ingredient('1', 'Doe', 2)];

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

  removeSelectedIngredient(ingId: string) {
    const index = this.ingredients.findIndex((i) => i.id === ingId);
    this.ingredients.splice(index, 1);
    this.updatedIngredients.next(this.ingredients.slice());
  }

  updateSelectedIngredient(ingredient: Ingredient) {
    const { id } = ingredient;
    const selectedIngredient = this.ingredients.find(
      (ingredient: Ingredient) => ingredient.id === id
    );
    selectedIngredient.name = ingredient.name;
    selectedIngredient.quantity = ingredient.quantity;
    this.updatedIngredients.next(this.ingredients.slice());
  }
}
