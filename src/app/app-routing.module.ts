import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AddEditRecipeComponent } from './food/add-edit-recipe/add-edit-recipe.component';
import { RecipeDetailComponent } from './food/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './food/recipes/recipes.component';
import { AddEditIngredientComponent } from './shop/add-edit-ingredient/add-edit-ingredient.component';
import { IngredientsComponent } from './shop/ingredients/ingredients.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [{ path: ':id', component: RecipeDetailComponent }],
  },
  {
    path: 'shop',
    component: IngredientsComponent,
  },
  {
    path: 'shop/add-ing',
    component: AddEditIngredientComponent,
  },
  {
    path: 'shop/:id/edit',
    component: AddEditIngredientComponent,
  },
  {
    path: 'add-recipe',
    component: AddEditRecipeComponent,
  },
  {
    path: 'auth/login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
