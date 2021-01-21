import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.scss']
})
export class RecipiesListComponent implements OnInit {
  name:string = ''
  desc:string = ''
  imagepath:string = ''
  show:boolean = true
  recipes: Recipe[] = [
    new Recipe('Salad','This will be tasty','https://images.unsplash.com/photo-1577594990850-e843a8e91512?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')
  ]
  constructor() { }

  ngOnInit(): void {
  }
  AddRecipe(){
    this.recipes.push( new Recipe(this.name,this.desc,this.imagepath))
  }
  showDiv(){
    this.show = !this.show
  }

}
