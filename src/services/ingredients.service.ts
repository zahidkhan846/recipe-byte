import { Subject } from 'rxjs';
import { Ingredient } from 'src/model/ingredient';

export class IngredientsService {
  updatedIngredients = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [new Ingredient('Doe', 2)];

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

  getSelectedIngredient(ingIndex: number) {
    return this.ingredients[ingIndex];
  }

  removeSelectedIngredient(ingIndex: number) {
    this.ingredients.splice(ingIndex, 1);
    this.updatedIngredients.next(this.ingredients.slice());
  }

  updateSelectedIngredient(ingredient: Ingredient, index: number) {
    this.ingredients[index] = ingredient;
    this.updatedIngredients.next(this.ingredients.slice());
  }
}
