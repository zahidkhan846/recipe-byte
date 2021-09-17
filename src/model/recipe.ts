import { Ingredient } from './ingredient';

export class Recipe {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public imageUrl: string,
    public ingredients: Ingredient[]
  ) {}
}
