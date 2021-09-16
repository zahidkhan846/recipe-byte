import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FallbackContentComponent } from 'src/app/fallback-content/fallback-content.component';
import { AddButtonComponent } from 'src/app/ui/buttons/add-button/add-button.component';
import { DeleteButtonComponent } from 'src/app/ui/buttons/delete-button/delete-button.component';
import { DropDownComponent } from 'src/app/ui/buttons/drop-down/drop-down.component';
import { AddEditRecipeComponent } from '../add-edit-recipe/add-edit-recipe.component';
import { DetailComponent } from '../detail/detail.component';
import { SingleRecipeComponent } from '../single-recipe/single-recipe.component';
import { RecipesComponent } from './recipes.component';

@NgModule({
  declarations: [
    RecipesComponent,
    SingleRecipeComponent,
    AddEditRecipeComponent,
    DetailComponent,
    DropDownComponent,
    AddButtonComponent,
    DeleteButtonComponent,
  ],
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
})
export class RecipesModule {}
