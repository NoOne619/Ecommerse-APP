import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService }from './../Service/data.service'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-pg1',
  templateUrl: './pg1.page.html',
  styleUrls: ['./pg1.page.scss'],
})
export class Pg1Page implements OnInit {
    public sum :any;
    public items:any;
  constructor( public router: Router,public data:DataService,public store:Storage) {
    this.data.getItems().subscribe(items => {
      this.items = items;
    });
   }

  async ngOnInit() {
    console.log(this.items.length)
   
    
  
  //   await this.store.create();
  //  this.store.set('username','helloabdullah');
   
    this.sum = 0;
    for(let i = 0 ; i<this.items.length ; i++)
    {
      this.sum+= this.items[i].quantity;
      this.items[i].total =  this.items[i].price*this.items[i].quantity;
    }
    
    console.log(this.sum);
    

  }
  increament(i : any){

    this.items[i].quantity+=1;
    this.items[i].total+=this.items[i].price
  }
  decreament(i : any){

    this.items[i].quantity-=1;
    if (this.items[i].quantity<0) {
     this.items.splice(i , 1);//here the second index means that we just have to remove only that index if its 2 then 2 indexes will be removed starting from i 
   
     
    }
    else{
      this.items[i].total-=this.items[i].price
     
    }
  }
 
  goto(product: any){
    if(product==0)
      this.router.navigate(['pg5'])
    else if(product==1)
    this.router.navigate(['pg1'])
    else if(product==2)
    this.router.navigate(['pg2'])

    //   this.router.navigate(['pg4'] , {state :{ data:product}} )
    
    // //this.router.navigate(['pg4'], { queryParams: { data: JSON.stringify(product) } });
   
  //  this.router.navigate(['pg4'])
  //   localStorage.setItem('selectedProduct', JSON.stringify(product));
   
  
  }

}
