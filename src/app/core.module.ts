import { NgModule } from '@angular/core';

import { RecipesService } from 'src/services/recipes.service';
import { IngredientsService } from 'src/services/ingredients.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/services/auth-interceptor.service';

@NgModule({
  providers: [
    RecipesService,
    IngredientsService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class CoreModule {}
