import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-selection-allergenes',
  templateUrl: './selection-allergenes.component.html',
  styleUrls: ['./selection-allergenes.component.css'],
})
export class SelectionAllergenesComponent {
  toppings = new FormControl('');
  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];
}
