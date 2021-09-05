import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { RecipesComponent } from './food/recipes/recipes.component';
import { SingleRecipeComponent } from './food/single-recipe/single-recipe.component';
import { IngredientsComponent } from './shop/ingredients/ingredients.component';
import { RecipesService } from 'src/services/recipes.service';
import { IngredientsService } from 'src/services/ingredients.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { AddEditRecipeComponent } from './food/add-edit-recipe/add-edit-recipe.component';
import { AddEditIngredientComponent } from './shop/add-edit-ingredient/add-edit-ingredient.component';
import { IngredientItemComponent } from './shop/ingredient-item/ingredient-item.component';
import { FallbackContentComponent } from './fallback-content/fallback-content.component';
import { DropDownComponent } from './drop-down/drop-down.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    SingleRecipeComponent,
    IngredientsComponent,
    LoginComponent,
    AddEditRecipeComponent,
    AddEditIngredientComponent,
    IngredientItemComponent,
    FallbackContentComponent,
    DropDownComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [RecipesService, IngredientsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
