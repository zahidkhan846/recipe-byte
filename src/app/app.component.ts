import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/services/recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private recipeService: RecipesService) {}

  ngOnInit() {
    this.recipeService.fetchAllRecipes().subscribe();
  }
}
