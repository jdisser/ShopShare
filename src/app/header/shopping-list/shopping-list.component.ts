import { Component, OnInit } from '@angular/core';
import { ShoppingListItem } from "./shopping-list.item.model"

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  items: ShoppingListItem[] = [];
  constructor() { }

  ngOnInit() {
  }
}
