import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-ingredient',
  templateUrl: './manage-ingredient.component.html',
  styleUrls: ['./manage-ingredient.component.css'],
})
export class ManageIngredientComponent implements OnInit {
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
