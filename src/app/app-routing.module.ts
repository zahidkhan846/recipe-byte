import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    loadChildren: () =>
      import('./recipe/recipes.module').then((m) => m.RecipesModule),
  },
  {
    path: 'ingredient',
    loadChildren: () =>
      import('./ingredient/ingredients.module').then(
        (m) => m.IngredientsModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
