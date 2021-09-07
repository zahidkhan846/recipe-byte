import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/model/ingredient';
import { Recipe } from 'src/model/recipe';
import { RecipesService } from 'src/services/recipes.service';

@Component({
  selector: 'app-add-edit-recipe',
  templateUrl: './add-edit-recipe.component.html',
  styleUrls: ['./add-edit-recipe.component.css'],
})
export class AddEditRecipeComponent implements OnInit {
  editMode: boolean = false;
  recipeId: string = null;
  selectedRecipe: Recipe = null;

  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((p: Params) => {
      this.recipeId = p.id;
      if (this.recipeId) {
        this.editMode = true;
        this.selectedRecipe = this.recipeService.getSelectedRecipe(
          this.recipeId
        );
      }
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      recipeName = this.selectedRecipe.name;
      recipeImageUrl = this.selectedRecipe.imageUrl;
      recipeDescription = this.selectedRecipe.description;
      this.selectedRecipe.ingredients.forEach((ingredient: Ingredient) => {
        recipeIngredients.push(
          new FormGroup({
            name: new FormControl(ingredient.name, Validators.required),
            quantity: new FormControl(ingredient.quantity, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/),
            ]),
          })
        );
      });
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imageUrl: new FormControl(recipeImageUrl, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients,
    });
  }

  onSubmit() {
    const recipe = new Recipe(
      new Date().toISOString(),
      this.recipeForm.value.name,
      this.recipeForm.value.description,
      this.recipeForm.value.imageUrl,
      this.recipeForm.value.ingredients
    );
    if (this.editMode) {
      recipe.id = this.selectedRecipe.id;
      this.recipeService.updateSelectedRecipe(recipe);
    } else {
      this.recipeService.addNewRecipe(recipe);
    }
    this.onCancel();
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        quantity: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  onDeleteIngredient(index: number) {}

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
