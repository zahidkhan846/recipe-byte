import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { CardComponent } from './ui/card/card.component';
import { RecipesComponent } from './food/recipes/recipes.component';
import { SingleRecipeComponent } from './food/single-recipe/single-recipe.component';
import { RecipeDetailComponent } from './food/recipe-detail/recipe-detail.component';
import { IngredientsComponent } from './shop/ingredients/ingredients.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CardComponent, RecipesComponent, SingleRecipeComponent, RecipeDetailComponent, IngredientsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
