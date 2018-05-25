import {RecipeDetail} from "./recipe.detail.model"
import {RecipeItem} from "./recipe.item.model"

export class Recipe {

  constructor(
    public name: string,
    public desc: string,
    public imageURL: string,
    public details: RecipeDetail[],
    public items: RecipeItem[]){}
}
