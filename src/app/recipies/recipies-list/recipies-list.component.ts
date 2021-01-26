import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
  clicked:boolean = false
  show:boolean = false
  @Output() emitRecipe:EventEmitter<Recipe> = new EventEmitter()
  @Output() selected:EventEmitter<Boolean> =new EventEmitter()
  recipes: Recipe[] = [
    new Recipe('Salad','This will be tasty','https://images.unsplash.com/photo-1577594990850-e843a8e91512?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'),
    new Recipe('Pancake','With chocolate sauce and toppings','https://images.unsplash.com/photo-1504113888839-1c8eb50233d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1015&q=80'),
    new Recipe('French Toast','These tastes better with cheese','https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80'),
    new Recipe('Cupcake muffins','With strawberry cream','https://images.unsplash.com/photo-1563076429-c04cbe68da3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'),
    new Recipe('Donuts','Chocolate flavoured ','https://images.unsplash.com/photo-1556913396-7a3c459ef68e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1040&q=80'),
    new Recipe('Pasta','Chocloate wrapper style','https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'),
    new Recipe('Bacon','With egg omlete','https://images.unsplash.com/photo-1606851094291-6efae152bb87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'),
    new Recipe('Pepporoni Pizza','With some Olive toppings','https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'),

  ]
  constructor() { }

  ngOnInit(): void {
  }
  addbtn_clicked(){
    this.clicked = !this.clicked
  }
  addrecipe(Data:Recipe){
    this.recipes.push({
      Name: Data.Name,
      Description: Data.Description,
      Imagepath: Data.Imagepath
    })
  }
  showDiv(data:Recipe){
    this.name = data.Name
    this.desc = data.Description
    this.imagepath = data.Imagepath

    this.emitRecipe.emit({
      Name: this.name,
      Description: this.desc,
      Imagepath: this.imagepath
    })
    this.selected.emit(true)
  }
}
