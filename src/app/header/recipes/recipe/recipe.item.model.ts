import {Ingredient} from "../../ingredients/ingredient.model"

export class RecipeItem {
  
  constructor(
    public ingredient: Ingredient,
    public amount: number){}

}
