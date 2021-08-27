import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-recipe',
  templateUrl: './manage-recipe.component.html',
  styleUrls: ['./manage-recipe.component.css'],
})
export class ManageRecipeComponent implements OnInit {
  show: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onShowDropDown() {
    this.show = !this.show;
  }

  onAdd() {
    console.log('Adding');
  }

  onEdit() {
    console.log('Editing');
  }

  onRemove() {
    console.log('Removieng');
  }
}
