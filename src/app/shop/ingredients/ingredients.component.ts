import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/model/ingredient';
import { IngredientsService } from 'src/services/ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css'],
})
export class IngredientsComponent implements OnInit {
  show = false;

  ingredients: Ingredient[] = [];

  constructor(private ingredientsService: IngredientsService) {}

  ngOnInit() {
    this.ingredients = this.ingredientsService.getAllIngredients();
  }

  onShowForm() {
    this.show = !this.show;
  }
}
