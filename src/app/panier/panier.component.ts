import { Component, Input, OnChanges } from '@angular/core';
import { Ingredient } from '../models/ingredient';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnChanges {
  @Input() ingredients: Ingredient[] = [];
  @Input() base?: number;
  prix = 0;

  ngOnChanges() {
    this.prix = this.calculerPrix(this.ingredients, this.base);
  }

  calculerPrix(ingredients: Ingredient[], base?: number): number {
    let prix = 0;
    if (base === 0) {
      // Base tomate
      prix += 10;
    } else if (base === 1) {
      // Base crème
      prix += 12;
    }
    ingredients.forEach((i) => {
      prix += i.prix;
    });

    return prix;
  }
}
