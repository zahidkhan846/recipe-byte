import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './food/recipes/recipes.component';
import { IngredientsComponent } from './shop/ingredients/ingredients.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
  },
  {
    path: 'shop',
    component: IngredientsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
