import { Ingredient } from "../ingredients/ingredient.model"

export class Staple{
  ingredient: Ingredient;
  firstOrder: Date;
  lastOrder: Date;
  reorder: Date;
  buyQuantity: number;
  totalQuantity: number;

  constructor(ingredient: Ingredient, firstOrder: Date, lastOrder: Date, reorder: Date, buyQuantity: number, totalQuantity: number){
    this.ingredient=ingredient;
    this.firstOrder=firstOrder;
    this.lastOrder=lastOrder;
    this.reorder=reorder;
    this.buyQuantity=buyQuantity;
    this.totalQuantity=totalQuantity;
  }
}
