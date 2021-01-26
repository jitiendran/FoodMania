import { Recipe } from './recipies/recipe.model';
import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'foodmania';
  navigateFeature:string = 'recipe'
  onNavigate(data:string){
    this.navigateFeature = data
  }
}
