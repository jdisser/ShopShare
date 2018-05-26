import { Component, OnInit } from '@angular/core';
import { RecipeDetail } from "./recipe-detail/recipe.detail.model";
import { RecipeItem } from "./recipe-item/recipe.item.model"
import { Recipe } from "./recipe.model"


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  public details: RecipeDetail[];
  public items: RecipeItem[];
  public recipe: Recipe;
  public name: string;
  public description: string;
  public imageURL: string;

  constructor() {
    this.details = [];
    this.items = [];
    this.recipe = null;
    this.name = "";
    this.description = "";
    this.imageURL = "";
   }

  ngOnInit() {
  }

}
