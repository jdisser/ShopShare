import {RecipeDetail} from "./recipe/recipe.detail.model"
import {RecipeItem} from "./recipe/recipe.item.model"

export class Recipe {
  public name: string;
  public description: string;
  public image: string;
  public details: RecipeDetail[];
  public items: RecipeItem[];

  constructor(name: string, desc: string, url: string, details: RecipeDetail[], items: RecipeItem[]){
    this.name = name;
    this.description = desc;
    this.image = url;
    this.details = details;
    this.items = items;
  }

}
