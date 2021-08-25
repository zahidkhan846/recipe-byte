import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/model/recipe';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css'],
})
export class SingleRecipeComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() selectedRecipeId = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSelect(id: string) {
    this.selectedRecipeId.emit(id);
  }
}
