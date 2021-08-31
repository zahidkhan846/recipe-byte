import { Ingredient } from './ingredient';

export class Recipe {
  public id: string;
  public name: string;
  public description: string;
  public imageUrl: string;
  public ingredients: Ingredient[];

  constructor(
    id: string,
    name: string,
    descpription: string,
    imageUrl: string,
    ingredients: Ingredient[]
  ) {
    this.id = id;
    this.name = name;
    this.description = descpription;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
  }
}
