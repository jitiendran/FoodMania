import { Ingredient } from './../../shared/ingredients.model';
import { 
  Component,
  OnInit, 
  EventEmitter, 
  Output, 
  ViewChild, 
  ElementRef 
} from '@angular/core';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name') Name:ElementRef;
  @ViewChild('amount') Amount:ElementRef;
  @Output() Items:EventEmitter<Ingredient> = new EventEmitter()
  constructor(Name:ElementRef,Amount:ElementRef) {
    this.Name = Name
    this.Amount = Amount
  }
  ngOnInit(): void {
  }
  addItems(){
    this.Items.emit({
      Name: this.Name.nativeElement.value,
      Amount: this.Amount.nativeElement.value
    })
    this.Name.nativeElement.value = null
    this.Amount.nativeElement.value = null
  }

}
