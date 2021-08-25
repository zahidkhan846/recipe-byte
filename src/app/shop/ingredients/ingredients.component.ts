import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/model/ingredient';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css'],
})
export class IngredientsComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Cheese', 2),
    new Ingredient('Tomato', 1),
  ];

  constructor() {}

  ngOnInit(): void {}
}
