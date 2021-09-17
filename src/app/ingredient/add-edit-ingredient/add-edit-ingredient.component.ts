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

  ingIndex: number = null;
  editMode: boolean = false;
  ingredient: Ingredient = null;

  constructor(
    private ingService: IngredientsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params.subscribe((p: Params) => {
      this.ingIndex = p.id;
      if (this.ingIndex) {
        this.editMode = true;
        this.ingredient = this.ingService.getSelectedIngredient(this.ingIndex);
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
      name: ingForm.value.name,
      quantity: ingForm.value.qty,
    };
    if (this.editMode) {
      this.ingService.updateSelectedIngredient(ingredient, this.ingIndex);
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
