import { Ingredient } from "../../ingredients/ingredient.model"
// for testing
export class Staple{
  public ingredient: Ingredient;
  //public firstOrder: Date;
  //public lastOrder: Date;
  //public reorder: Date;
  public buyQuantity: number;
  //public totalQuantity: number;

  constructor(ingredient: Ingredient, buyQuantity: number){
    this.ingredient=ingredient;
    //this.firstOrder=firstOrder;
    //this.lastOrder=lastOrder;
    //this.reorder=reorder;
    this.buyQuantity=buyQuantity;
    //this.totalQuantity=totalQuantity;
  }
}
