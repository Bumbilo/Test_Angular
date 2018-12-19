import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('First Recipe >',
      'Forst component recipe is simply a test',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Freach Fries', 20)]),
    new Recipe('Second Recipe <',
      'Or no its second component recipe is simply a test',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
      [new Ingredient('Apple', 5 ), new Ingredient('tommato', 10)]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }



}