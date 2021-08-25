export class Recipe {
  public id: string;
  public name: string;
  public description: string;
  public imageUrl: string;

  constructor(
    id: string,
    name: string,
    descpription: string,
    imageUrl: string
  ) {
    this.id = id;
    this.name = name;
    this.description = descpription;
    this.imageUrl = imageUrl;
  }
}
