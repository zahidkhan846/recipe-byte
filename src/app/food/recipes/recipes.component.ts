import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipesService } from 'src/services/recipes.service';
import { Recipe } from '../../../model/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  @Output() recipeDetail = new EventEmitter<Recipe>();

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }
}
