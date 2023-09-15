import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Service/data.service';
import { Share } from '@capacitor/share';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-pg5',
  templateUrl: './pg5.page.html',
  styleUrls: ['./pg5.page.scss'],
})
export class Pg5Page implements OnInit {
 


  itemS = ['item1', 'item2', 'item3', 'item4'];
  
  public cart: any;
  public items: [] = [];
  public categories: any;
  public image:any="https://ionicframework.com/docs/img/demos/avatar.svg"
  constructor(private route: Router, private data: DataService) {
    this.data.getCar2().subscribe(cart => {
      this.cart = cart;
    });
    this.data.getitems2().subscribe(items => {
      this.items = items;
    });
    this.data.getcategories().subscribe(cat => {
      this.categories = cat;
    });
  }
  ngOnInit() {
   

  }
  addItem(newItem: any) {

    this.itemS.push(newItem);



  }


  gotto(i: any) {
    if (i == 2) {
      this.route.navigate(['pg1'])
    }
  }

  async getPicnShare() {
    
     const photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri


    });
   this.image=photo.webPath;
  }

}

