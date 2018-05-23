import { Component, OnInit } from '@angular/core';
import { RecipeDetail } from "./recipe.detail.model";
import { RecipeItem } from "./recipe.item.model"

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  detail: RecipeDetail = null;
  items: RecipeItem[] = [];
  constructor() { }

  ngOnInit() {
  }

}
