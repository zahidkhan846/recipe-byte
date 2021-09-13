import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { RecipesService } from 'src/services/recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private recipeService: RecipesService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.setCurrentUser();
    this.recipeService.fetchAllRecipes().subscribe();
  }
}
