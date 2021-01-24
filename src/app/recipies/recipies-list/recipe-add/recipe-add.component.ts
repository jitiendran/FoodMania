import { Recipe } from './../../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent implements OnInit {
  name:string = ''
  desc:string = ''
  imagepath:string = ''
  @Output() addItems:EventEmitter<Recipe> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  AddRecipe(){
    this.addItems.emit({
      Name: this.name,
      Description: this.desc,
      Imagepath: this.imagepath
    })
  }

}
