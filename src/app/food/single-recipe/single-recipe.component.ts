import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'src/model/ingredient';
import { Recipe } from 'src/model/recipe';
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
    private recipeService: RecipesService
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
    console.log(ingredients);
  }
}
