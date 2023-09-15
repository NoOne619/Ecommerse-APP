import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ DataService}from './../Service/data.service'


@Component({
  selector: 'app-pg4',
  templateUrl: './pg4.page.html',
  styleUrls: ['./pg4.page.scss'],
})
export class Pg4Page implements OnInit {

  constructor(public data:DataService,public route:Router) {
  
    this.data.getCart_Items().subscribe(cart_item =>{
        this.cart=cart_item;
    });
 
  }
  public cart:any;
  public sum: any;
  public total_price: any;    
  public shipment_charge: any = 143;
  
public products: any
  ngOnInit() {

    // this.products = history.state.data;
   
  //  this.route.queryParams.subscribe(params => {
  //    this.products = JSON.parse(params['data']);
  //    });
   
    // const storedData = localStorage.getItem('selectedProduct');
    // this.products = storedData ? JSON.parse(storedData) : null;

    console.log(this.products);
    
    this.sum = 0;
    this.total_price = 0;

    for (let i = 0; i < this.cart.length; i++) {
      this.sum += this.cart[i].quantity;
      this.cart[i].total = this.cart[i].price * this.cart[i].quantity;
      this.total_price += this.cart[i].total;
    }
    console.log(this.sum);
    
    
  }
  increament(i: any) {

    this.cart[i].quantity += 1;
    this.cart[i].total += this.cart[i].price;
    this.total_price += this.cart[i].price;
    this.sum+=1;

  }
  decreament(i: any) {

    this.cart[i].quantity -= 1;
   
    if (this.cart[i].quantity <= 0) {
      this.sum -= 1;
      this.cart[i].total -= this.cart[i].price;
      this.total_price -= this.cart[i].price;
      this.cart.splice(i, 1);//here the second index means that we just have to remove only that index if its 2 then 2 indexes will be removed starting from i 

      
    }
    else {
      this.cart[i].total -= this.cart[i].price;
      this.total_price -= this.cart[i].price;
      this.sum -= 1;
    }
    if (this.sum<=0) {
      this.shipment_charge=0;
         
    }
  }

gotto(i:number){
  if (i==0) 
    this.route.navigate(['pg2'])
  
  else if (i==1) 
  this.route.navigate(['pg6'])
  
}


}
