import {Ingredient} from "../ingredients/ingredient.model"

export class ShoppingListItem {
  ingredient: Ingredient;
  quantity: number;

  constructor(ingredient: Ingredient, quantity: number){
    this.ingredient = ingredient;
    this.quantity = quantity;
  }
}
