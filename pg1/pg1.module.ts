import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pg1PageRoutingModule } from './pg1-routing.module';

import { Pg1Page } from './pg1.page';
import { ShareModule } from '../Share/share/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pg1PageRoutingModule,
    ShareModule
  ],
  declarations: [Pg1Page]
})
export class Pg1PageModule {}
