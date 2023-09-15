import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pg3PageRoutingModule } from './pg3-routing.module';

import { Pg3Page } from './pg3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pg3PageRoutingModule
  ],
  declarations: [Pg3Page]
})
export class Pg3PageModule {}
