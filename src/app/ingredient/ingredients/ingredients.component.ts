import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/model/ingredient';
import { IngredientsService } from 'src/services/ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css'],
})
export class IngredientsComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  ingSubscription: Subscription;
  constructor(private ingredientsService: IngredientsService) {}

  ngOnInit() {
    this.ingredients = this.ingredientsService.getAllIngredients();
    this.ingSubscription = this.ingredientsService.updatedIngredients.subscribe(
      (ings: Ingredient[]) => {
        this.ingredients = ings;
      }
    );
  }

  hasIngredients() {
    return this.ingredients.length > 0;
  }

  ngOnDestroy() {
    this.ingSubscription.unsubscribe();
  }
}
