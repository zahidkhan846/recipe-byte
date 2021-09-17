import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'src/model/ingredient';
import { Recipe } from 'src/model/recipe';
import { IngredientsService } from 'src/services/ingredients.service';
import { RecipesService } from 'src/services/recipes.service';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css'],
})
export class SingleRecipeComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipesService,
    private ingredientService: IngredientsService
  ) {}

  ngOnInit() {}

  onEdit(id: string) {
    this.router.navigate(['recipes', id, 'edit']);
  }

  onRemove(id: string) {
    this.recipeService.deleteSelectedRecipe(id);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onAddToIngredients(ingredients: Ingredient[]) {
    this.ingredientService.addIngredients(ingredients);
    this.router.navigate(['ingredient']);
  }
}
