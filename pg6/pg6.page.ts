import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../Service/alert.service';
@Component({
  selector: 'app-pg6',
  templateUrl: './pg6.page.html',
  styleUrls: ['./pg6.page.scss'],
})
export class Pg6Page implements OnInit {
  
  
  public user: any ={ username :'ali@gmail.com' , password:'123321'}
  public user1: any = {username :'' , password:''}
  public time=0;
  public intervalReef:any;
  public chance=3; 
  public flag:boolean=false;
  constructor(public router:Router,public alert:AlertService) {
    
  }
   

  ngOnInit() {
  
   
 
  }
  updated(){

    console.log(this.user1);

  }
  selector(person:string){
    console.log(person);
    
  }
  numIncreament(){
    this.time++;
    if(this.time==11){
      clearInterval(this.intervalReef);
      this.time=0;
      this.chance=3;
      this.flag=false;
    }
  }
  
test(){
  console.log(this.user1);
  if(this.user1.username==this.user.username && this.user1.password==this.user.password)
  {
    this.router.navigate(['pg5'])
  }
  else {
     --this.chance;
      if(this.chance==0)
      {
        this.flag=true;
        this.intervalReef= setInterval(()=>this.numIncreament(),1000)
        this.alert.test();
       
      }
  }
  
}
}
