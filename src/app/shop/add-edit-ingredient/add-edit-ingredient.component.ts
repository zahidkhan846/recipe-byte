import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/model/ingredient';
import { IngredientsService } from 'src/services/ingredients.service';

@Component({
  selector: 'app-add-edit-ingredient',
  templateUrl: './add-edit-ingredient.component.html',
  styleUrls: ['./add-edit-ingredient.component.css'],
})
export class AddEditIngredientComponent implements OnInit {
  @ViewChild('ingForm', { static: true }) ingForm: NgForm;

  ingId: string = null;
  editMode: boolean = false;
  ingredient: Ingredient = null;

  constructor(
    private ingService: IngredientsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params.subscribe((p: Params) => {
      this.ingId = p.id;
      if (this.ingId) {
        this.editMode = true;
        this.ingredient = this.ingService.getSelectedIngredient(this.ingId);
        setTimeout(() => {
          this.ingForm.setValue({
            name: this.ingredient.name,
            qty: this.ingredient.quantity,
          });
        });
      }
    });
  }

  onFormSubmit(ingForm: NgForm) {
    const ingredient = {
      id: new Date().toISOString(),
      name: ingForm.value.name,
      quantity: ingForm.value.qty,
    };
    if (this.editMode) {
      ingredient.id = this.ingredient.id;
      this.ingService.updateSelectedIngredient(ingredient);
    } else {
      this.ingService.addNewIngredient(ingredient);
    }
    this.onClearForm();
    this.onGoBack();
  }

  onClearForm() {
    this.ingForm.reset();
  }

  onGoBack() {
    this.location.back();
  }
}
