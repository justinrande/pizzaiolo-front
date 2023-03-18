import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { IngredientsService } from '../services/ingredients.service';

@Component({
  selector: 'app-selection-ingredients',
  templateUrl: './selection-ingredients.component.html',
  styleUrls: ['./selection-ingredients.component.css'],
})
export class SelectionIngredientsComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private ingredientsService: IngredientsService) {}

  ngOnInit() {
    this.ingredientsService
      .getIngredients()
      .subscribe((ingredients) => (this.ingredients = ingredients));
  }
}
