import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/model/ingredient';

export class IngredientsService {
  updatedIngredients = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('1', 'Cheese', 'http://picsum.photos/300', 2),
  ];

  getAllIngredients() {
    const copyOfIngredients = [...this.ingredients];
    return copyOfIngredients;
  }

  addNewIngredient(newIng: Ingredient) {
    this.ingredients.push(newIng);
    this.updatedIngredients.emit(this.ingredients.slice());
  }

  addIngredients(newIngs: Ingredient[]) {
    this.ingredients.push(...newIngs);
    this.updatedIngredients.emit(this.ingredients.slice());
  }
}
