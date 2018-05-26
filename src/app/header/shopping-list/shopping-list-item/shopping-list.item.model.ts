import {Ingredient} from "../../ingredients/ingredient.model"

export class ShoppingListItem {
  public ingredient: Ingredient;
  public quantity: number;

  constructor(ingredient: Ingredient, quantity: number){
    this.ingredient = ingredient;
    this.quantity = quantity;
  }
}
