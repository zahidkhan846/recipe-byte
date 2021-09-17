import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from 'src/model/recipe';
import { RecipesService } from 'src/services/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeId: string = null;
  selectedRecipe: Recipe = null;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipesService,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.recipeId = params.id;
      if (this.recipeId) {
        this.selectedRecipe = this.recipeService.getSelectedRecipe(
          this.recipeId
        );
      }
      if (!this.selectedRecipe && !this.recipeId) {
        this.location.back();
      }
    });
  }
}
