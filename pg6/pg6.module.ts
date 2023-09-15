import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pg6PageRoutingModule } from './pg6-routing.module';

import { Pg6Page } from './pg6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pg6PageRoutingModule
  ],
  declarations: [Pg6Page]
})
export class Pg6PageModule {}
