import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pg2',
  templateUrl: './pg2.page.html',
  styleUrls: ['./pg2.page.scss'],
})
export class Pg2Page implements OnInit {

  constructor(private route:Router,private store:Storage,private router:ActivatedRoute) { }
public products:any;
   
 async ngOnInit() {
  // console.log(   this.store.get('username'));

   const storedData = localStorage.getItem('selectedProduct');
    this.products = storedData ? JSON.parse(storedData) : null;

  
    console.log(this.products);
   
  
  }
  gotto(i:any){
    if(i==0)
    this.route.navigate(['pg5'])
    else if (i==1) 
    this.route.navigate(['pg4'])
    
    
  }

  

}
