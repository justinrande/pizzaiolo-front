import { Component } from '@angular/core';

@Component({
  selector: 'app-selection-ingredients',
  templateUrl: './selection-ingredients.component.html',
  styleUrls: ['./selection-ingredients.component.css'],
})
export class SelectionIngredientsComponent {
  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];
}
