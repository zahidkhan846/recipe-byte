import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/model/recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  @Output() closeModal = new EventEmitter<Recipe>();
  ngOnInit(): void {}

  onClose(recipe: Recipe) {
    this.closeModal.emit(recipe);
  }
}
