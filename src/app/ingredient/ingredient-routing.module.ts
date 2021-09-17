import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditIngredientComponent } from './add-edit-ingredient/add-edit-ingredient.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

const routes: Routes = [
  {
    path: '',
    component: IngredientsComponent,
  },
  {
    path: 'ingredient/add-ing',
    component: AddEditIngredientComponent,
  },
  {
    path: 'ingredient/:id/edit',
    component: AddEditIngredientComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngredientRoutingModule {}
