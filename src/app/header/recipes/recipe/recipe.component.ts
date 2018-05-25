import { Component, OnInit } from '@angular/core';
import { RecipeDetail } from "./recipe.detail.model";
import { RecipeItem } from "./recipe.item.model"
import { Recipe } from "./recipe.model"


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  public detail: RecipeDetail[] = [];
  public items: RecipeItem[] = [];
  public recipe: Recipe = null;
  public name: string = "";
  public description: string = "";
  public imageURL: string = "";

  constructor() { }

  ngOnInit() {
  }

}
