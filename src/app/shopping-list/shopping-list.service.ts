import { Ingredient } from 'src/app/shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Potato', 7),
  ];

  getIngredients() {
      return this.ingredients.slice();
  }

  setIngredients(ingredient: Ingredient): void {
      this.ingredients.push(ingredient);
      this.ingredientsChanged.emit(this.ingredients.slice());
  }

}