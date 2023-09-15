import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
 
  
  constructor() {
   
   
       }
  
 
  getItems():Observable<any>{

    return of( [{img:"../../assets/img/pic1.jpg",title:"On Ear Headphones",details:"Beats Solo 3 wireless Kulak",price:105 , quantity:2,total:0},
    {img:"../../assets/img/pic2.jpg",title:"Apple Watch",details:"Black Dial",price:100 , quantity:2,total:0},
    {img:"../../assets/img/pic3.jpg",title:"White lamps",details:"blue lights",price:50 , quantity:2,total:0},
    {img:"../../assets/img/pic4.jpg",title:"Large Bulb",details:" wireless ",price:10 , quantity:2,total:0},
    {img:"../../assets/img/pic5.jpg",title:"Polaroid glasses",details:"stainless frames",price:20 , quantity:2,total:0},
    {img:"../../assets/img/pic6.jpg",title:"Laptop m11",details:"core i7",price:90 , quantity:2,total:0}]);
    

  }
  getCart_Items(): Observable<any>{
    return of(  [{ img: "../../assets/img/pic1.jpg", title: "On Ear Headphones", details: "Beats Solo 3 wireless Kulak", price: 105, quantity: 2, total: 0 },
    { img: "../../assets/img/pic2.jpg", title: "Apple Watch", details: "Black Dial", price: 100, quantity: 2, total: 0 },
    { img: "../../assets/img/pic3.jpg", title: "White lamps", details: "blue lights", price: 50, quantity: 2, total: 0 },
    { img: "../../assets/img/pic4.jpg", title: "Large Bulb", details: " wireless ", price: 10, quantity: 2, total: 0 },
    { img: "../../assets/img/pic5.jpg", title: "Polaroid glasses", details: "stainless frames", price: 20, quantity: 2, total: 0 },
    { img: "../../assets/img/pic6.jpg", title: "Laptop m11", details: "core i7", price: 105, quantity: 2, total: 0 }]);
  }
  getCar2():Observable<any>{

    return of(  [{img:"../../assets/img/pic7.jpg",title:"Jordan",details:" Solo 3 ",price:105},
    {img:"../../assets/img/pic2.jpg",title:"Apple watch",details:" Solo 2 ",price:100},
    {img:"../../assets/img/pic6.jpg",title:"Hp laptop",details:" corei9 ",price:400}]
  )


  }
  getitems2():Observable<any>{

    return of( [{img:"../../assets/img/dress1.jpg",title:"On Ear Headphones",details:"Beats Solo 3 wireless Kulak",price:105.00,quantity:2},
    {img:"../../assets/img/dress2.jpg",title:"Apple Watch",details:"Black Dial",price:100.00,quantity:2},
    {img:"../../assets/img/dress3.jpg",title:"White lamps",details:"blue lights",price:50,quantity:2},
    {img:"../../assets/img/dress4.jpg",title:"Large Bulb",details:" wireless ",price:10,quantity:2},
    {img:"../../assets/img/dress5.jpg",title:"Polaroid glasses",details:"stainless frames",price:20,quantity:2},
    {img:"../../assets/img/dress6.jpg",title:"Laptop m11",details:"core i7",price:90,quantity:2}]
    )

  }
  getcategories():Observable<any>{
    return of( [{name:"jackets"},
    {name:"denim"},
    {name:"elctronics",},
    {name:"bags"},
    {name:"shirts"},
    {name:"trousers"},
    {name:"purse"},
    {name:"Boots"},
    {name:"glasses"}]
    )


  }
};
