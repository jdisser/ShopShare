import { Component, OnInit } from '@angular/core';
import { RecipeItem } from "./recipe.item.model";
import { Ingredient } from "../../../ingredients/ingredient.model"


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  item: RecipeItem;
  constructor() {
    this.item = {
      ingredient: new Ingredient("Ingredient Name","Unit","Source"),
      amount: 2
    };
  }

  ngOnInit() {

  }

}
