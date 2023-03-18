import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Ingredient } from '../models/ingredient';

@Component({
  selector: 'app-commande-pizza',
  templateUrl: './commande-pizza.component.html',
  styleUrls: ['./commande-pizza.component.css'],
})
export class CommandePizzaComponent {
  ingredientsControl = new FormControl<Ingredient[]>([], { nonNullable: true });
  baseControl = new FormControl();
}
