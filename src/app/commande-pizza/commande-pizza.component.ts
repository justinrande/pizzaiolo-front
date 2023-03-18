import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-commande-pizza',
  templateUrl: './commande-pizza.component.html',
  styleUrls: ['./commande-pizza.component.css'],
})
export class CommandePizzaComponent {
  ingredientsControl = new FormControl([]);
  baseControl = new FormControl();
}
