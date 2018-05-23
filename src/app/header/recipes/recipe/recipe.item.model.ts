import {Ingredient} from "../../ingredients/ingredient.model"

export class RecipeItem {
  ingredient: Ingredient;
  amount: number;

  constructor(ingredient: Ingredient, amount: number){
    this.ingredient = ingredient;
    this.amount = amount;
  }

}
