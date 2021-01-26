import { Recipe } from './recipe.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss']
})
export class RecipiesComponent implements OnInit {
  recipetobeShowed:Recipe = new Recipe('','','')
  Selected:Boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  inserttoItems(data:Recipe){
    this.recipetobeShowed = new Recipe(data.Name,data.Description,data.Imagepath)
  }
  sendSelected(data:Boolean){
    this.Selected = data
  }

}
