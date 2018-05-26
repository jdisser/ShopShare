import { Component, OnInit } from '@angular/core';
import { RecipeDetail } from "./recipe.detail.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  detail: RecipeDetail;

  constructor() {
    this.detail = {
      step: 1,
      instruction: "A recipe step Detail"
    };
  }

  ngOnInit() {
  }

}
