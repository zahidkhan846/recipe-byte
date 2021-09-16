import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IngredientsComponent } from './ingredients.component';
import { AddEditIngredientComponent } from '../add-edit-ingredient/add-edit-ingredient.component';
import { IngredientItemComponent } from '../ingredient-item/ingredient-item.component';
import { FallbackContentComponent } from 'src/app/fallback-content/fallback-content.component';

@NgModule({
  declarations: [
    IngredientsComponent,
    AddEditIngredientComponent,
    IngredientItemComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [],
})
export class IngredientsModule {}
