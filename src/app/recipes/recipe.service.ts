import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {



  private recipes: Recipe[] = [
    new Recipe(
      'A schnitzel recipe',
      'this is simply a test',
      'https://www.thespruceeats.com/thmb/cckc3_4QUQ79kSFhcLPM8xg9F3g=/3797x2848/smart/filters:no_upscale()/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
      [
        new IngredientModel('Meat', 1),
        new IngredientModel('French Fries',20)
        ]),

    new Recipe(
      'A Hamburger recipe',
      'this is simply a test',
      'https://cdn.yemek.com/mncrop/400/300/uploads/2016/05/ev-yapimi-hamburger.jpg',
      [
        new IngredientModel('Buns', 2),
        new IngredientModel('Meat', 1)
      ])
  ];

  constructor(private slService:ShoppingListService ) {  }

  getRecipes (){
    return this.recipes.slice();
  }

  getRecipe (index: number){
    return this.recipes[index]
  }

  addIngredientsToShoppingList(ingredients:IngredientModel[]){
    this.slService.addIngredients(ingredients);
  }
}
