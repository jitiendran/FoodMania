import { Component,EventEmitter,OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
    @Output() clicked:EventEmitter<string> = new EventEmitter()
    constructor(){

    }
    ngOnInit(){
        
    }
    gonav(data:string){
        this.clicked.emit(data)
    }
}