import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient } from 'src/model/ingredient';
import { IngredientsService } from 'src/services/ingredients.service';

@Component({
  selector: 'app-ingredient-item',
  templateUrl: './ingredient-item.component.html',
  styleUrls: ['./ingredient-item.component.css'],
})
export class IngredientItemComponent implements OnInit {
  @Input() ingredient: Ingredient;
  @Input() ingIndex: number;
  constructor(
    private router: Router,
    private ingredientService: IngredientsService
  ) {}

  ngOnInit(): void {}

  onEdit(index: number) {
    this.router.navigate(['ingredient', index, 'edit']);
  }

  onDelete(index: number) {
    this.ingredientService.removeSelectedIngredient(index);
  }
}
