import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  constructor(private route:Router) { }
  @Input() check:any;
  
  
  ngOnInit() {
    
    
  }
  gotto_page(i:any){
    if(i==1){
      this.route.navigate(['pg5'])
    }
    if(i==2){
      this.route.navigate(['pg2'])
    }
    if(i==3){
      this.route.navigate(['pg6'])
    }
  }


}
