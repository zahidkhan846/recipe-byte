import { Component, OnChanges, OnInit } from '@angular/core';
import { Ingredient } from 'src/model/ingredient';
import { IngredientsService } from 'src/services/ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css'],
})
export class IngredientsComponent implements OnInit, OnChanges {
  show = false;
  name = '';
  imageUrl = '';
  quantity = null;

  ingredients: Ingredient[] = [];

  constructor(private ingredientsService: IngredientsService) {}

  ngOnInit() {
    this.ingredients = this.ingredientsService.getAllIngredients();
    this.ingredientsService.updatedIngredients.subscribe(
      (ings: Ingredient[]) => {
        this.ingredients = ings;
      }
    );
  }

  ngOnChanges() {}

  onShowForm() {
    this.show = !this.show;
  }

  onFormSubmit(e: Event) {
    e.preventDefault();
    const newIngredient = {
      id: new Date().toISOString(),
      name: this.name,
      imageUrl: this.imageUrl,
      quantity: this.quantity,
    };
    this.ingredientsService.addNewIngredient(newIngredient);
    this.show = false;
    this.onClearForm();
  }

  onClearForm() {
    this.name = '';
    this.imageUrl = '';
    this.quantity = null;
  }
}
