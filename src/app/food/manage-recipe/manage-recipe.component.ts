import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/model/ingredient';
import { Recipe } from 'src/model/recipe';
import { IngredientsService } from 'src/services/ingredients.service';

@Component({
  selector: 'app-manage-recipe',
  templateUrl: './manage-recipe.component.html',
  styleUrls: ['./manage-recipe.component.css'],
})
export class ManageRecipeComponent implements OnInit {
  show: boolean = false;

  @Input() selectedRecipe: Recipe;

  constructor(private allIngredientsService: IngredientsService) {}

  ngOnInit(): void {}

  onShowDropDown() {
    this.show = !this.show;
  }

  onAdd() {
    const allIngredients: Ingredient[] = this.selectedRecipe.ingredients;
    this.allIngredientsService.addIngredients(allIngredients);
    this.show = false;
  }

  onEdit() {
    console.log('Editing');
  }

  onRemove() {
    console.log('Removieng');
  }
}
