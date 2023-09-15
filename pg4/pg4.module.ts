import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pg4PageRoutingModule } from './pg4-routing.module';

import { Pg4Page } from './pg4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pg4PageRoutingModule
  ],
  declarations: [Pg4Page]
})
export class Pg4PageModule {}
