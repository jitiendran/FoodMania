import { Ingredient } from './../shared/ingredients.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  Ingredients:Ingredient[] = [
    new Ingredient('Tomato',5),
    new Ingredient('Onion',2)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
