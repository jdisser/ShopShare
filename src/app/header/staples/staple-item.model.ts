import { Ingredient } from "../ingredients/ingredient.model"

export class Staple{
  public ingredient: Ingredient;
  public firstOrder: Date;
  public lastOrder: Date;
  public reorder: Date;
  public buyQuantity: number;
  public totalQuantity: number;

  constructor(ingredient: Ingredient, firstOrder: Date, lastOrder: Date, reorder: Date, buyQuantity: number, totalQuantity: number){
    this.ingredient=ingredient;
    this.firstOrder=firstOrder;
    this.lastOrder=lastOrder;
    this.reorder=reorder;
    this.buyQuantity=buyQuantity;
    this.totalQuantity=totalQuantity;
  }
}
