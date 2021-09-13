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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditRecipeComponent } from './food/add-edit-recipe/add-edit-recipe.component';
import { AddEditIngredientComponent } from './shop/add-edit-ingredient/add-edit-ingredient.component';
import { IngredientItemComponent } from './shop/ingredient-item/ingredient-item.component';
import { FallbackContentComponent } from './fallback-content/fallback-content.component';
import { DropDownComponent } from './ui/buttons/drop-down/drop-down.component';
import { DetailComponent } from './food/detail/detail.component';
import { DeleteButtonComponent } from './ui/buttons/delete-button/delete-button.component';
import { AddButtonComponent } from './ui/buttons/add-button/add-button.component';
import { AuthComponent } from './authentication/auth/auth.component';
import { RegisterLoginComponent } from './authentication/register-login/register-login.component';

import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { XBtnComponent } from './ui/buttons/x-btn/x-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    SingleRecipeComponent,
    IngredientsComponent,
    AddEditRecipeComponent,
    AddEditIngredientComponent,
    IngredientItemComponent,
    FallbackContentComponent,
    DropDownComponent,
    DetailComponent,
    DeleteButtonComponent,
    AddButtonComponent,
    AuthComponent,
    RegisterLoginComponent,
    LoadingSpinnerComponent,
    XBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [RecipesService, IngredientsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
