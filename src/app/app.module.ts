import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { RecipesService } from 'src/services/recipes.service';
import { IngredientsService } from 'src/services/ingredients.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './authentication/auth/auth.component';
import { RegisterLoginComponent } from './authentication/register-login/register-login.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { XBtnComponent } from './ui/buttons/x-btn/x-btn.component';
import { AuthInterceptor } from 'src/services/auth-interceptor.service';
import { AlertComponent } from './ui/alert/alert.component';
import { RecipesModule } from './food/recipes/recipes.module';
import { IngredientsModule } from './shop/ingredients/ingredients.module';
import { FallbackContentComponent } from './fallback-content/fallback-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    RegisterLoginComponent,
    LoadingSpinnerComponent,
    XBtnComponent,
    AlertComponent,
    FallbackContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule,
    IngredientsModule,
  ],
  providers: [
    RecipesService,
    IngredientsService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
