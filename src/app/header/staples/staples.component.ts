import { Component, OnInit } from '@angular/core';
import { Staple } from "./staple.model"

@Component({
  selector: 'app-staples',
  templateUrl: './staples.component.html',
  styleUrls: ['./staples.component.css']
})
export class StaplesComponent implements OnInit {
  staples: Staple[] = [];

  constructor() { }

  ngOnInit() {
  }
}
