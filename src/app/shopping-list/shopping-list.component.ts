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
  insertItems(Items:Ingredient){
    this.Ingredients.push(new Ingredient(Items.Name,Items.Amount))
  }
  deleteItems(Itemsname:string){
    for(let i = 0 ; i < this.Ingredients.length ; i++){
      if(this.Ingredients[i].Name === Itemsname){
        this.Ingredients.splice(i,1)
      }
    }
  }

}
