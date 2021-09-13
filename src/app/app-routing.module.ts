import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavGuardService } from 'src/services/nav-guard.service';
import { RecipeResolver } from 'src/services/recipe-resolver.service';
import { AuthComponent } from './authentication/auth/auth.component';
import { RegisterLoginComponent } from './authentication/register-login/register-login.component';
import { AddEditRecipeComponent } from './food/add-edit-recipe/add-edit-recipe.component';
import { DetailComponent } from './food/detail/detail.component';
import { RecipesComponent } from './food/recipes/recipes.component';
import { AddEditIngredientComponent } from './shop/add-edit-ingredient/add-edit-ingredient.component';
import { IngredientsComponent } from './shop/ingredients/ingredients.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: ':id', component: DetailComponent, resolve: [RecipeResolver] },
    ],
  },
  {
    path: 'add-recipe',
    component: AddEditRecipeComponent,
    canActivate: [NavGuardService],
  },
  {
    path: 'recipes/:id/edit',
    component: AddEditRecipeComponent,
    resolve: [RecipeResolver],
    canActivate: [NavGuardService],
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
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: RegisterLoginComponent },
      { path: 'register', component: RegisterLoginComponent },
    ],
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
