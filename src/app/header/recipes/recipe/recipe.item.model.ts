import {Ingredient} from "../../ingredients/ingredient.model"

export class RecipeItem {
  public ingredient: Ingredient;
  public amount: number;

  constructor(ingredient: Ingredient, amount: number){
    this.ingredient = ingredient;
    this.amount = amount;
  }

}
