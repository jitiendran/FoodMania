import { Ingredient } from './../../../shared/ingredients.model';
import { Recipe } from './../../recipe.model';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() items:Recipe = new Recipe('','','')
  @Input() select:Boolean = false
  // clicked2:boolean = false
  eachIngredient:{ Recipename:string, Ingredients:Ingredient[]} = {
    Recipename: this.items.Name,
    Ingredients: []
  }
  @ViewChild('name') Name:ElementRef;
  @ViewChild('amount') Amount:ElementRef;
  constructor(a:ElementRef,b:ElementRef) {
    this.Name = a
    this.Amount = b
  }

  ngOnInit(): void {
  }
  clickedItem:Boolean=false
  addItems(){
    this.clickedItem = !this.clickedItem
    console.log(this.clickedItem)
  }
  insert(){
    this.eachIngredient.Ingredients.push(new Ingredient(this.Name.nativeElement.value,this.Amount.nativeElement.value))
    this.Name.nativeElement.value = null
    this.Amount.nativeElement.value = null
    this.clickedItem = false
  }
}
