import {RecipeDetail} from "./recipe-detail/recipe.detail.model"
import {RecipeItem} from "./recipe-item/recipe.item.model"

export class Recipe {

  constructor(
    public name: string,
    public desc: string,
    public imageURL: string,
    public details: RecipeDetail[],
    public items: RecipeItem[]){}
}
