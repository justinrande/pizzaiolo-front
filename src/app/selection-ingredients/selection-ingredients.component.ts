import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Ingredient } from '../models/ingredient';
import { IngredientsService } from '../services/ingredients.service';

@Component({
  selector: 'app-selection-ingredients',
  templateUrl: './selection-ingredients.component.html',
  styleUrls: ['./selection-ingredients.component.css'],
})
export class SelectionIngredientsComponent implements OnInit {
  @Input() control!: FormControl;
  ingredients: Ingredient[] = [];

  constructor(private ingredientsService: IngredientsService) {}

  ngOnInit() {
    this.ingredientsService
      .getIngredients()
      .subscribe((ingredients) => (this.ingredients = ingredients));
  }
}
