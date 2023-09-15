import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController) { }


  async test() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'wrong email or password',
      message: 'page locked for 1 min',
      buttons: ['cancel'],
     
      
    
    });
  
    await alert.present();
  }
  
}
