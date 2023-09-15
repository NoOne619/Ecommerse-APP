import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {
  @Input() item:any; 
  public  products:any[]=[];
  @Output() newItemEvent = new EventEmitter<any>();
  
  addNewItem(value: any) {
    this.newItemEvent.emit(value);
  }
  constructor(public router:Router) { }

  ngOnInit() {
    
    
    
  }
  buy( i:number){
    
    
    this.products.push(this.item[i])
    console.log(this.products);
    
        localStorage.setItem('selectedProduct', JSON.stringify(this.products));
    
  
  }

}
