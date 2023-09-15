import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pg5PageRoutingModule } from './pg5-routing.module';

import { Pg5Page } from './pg5.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ShareModule } from '../Share/share/share.module';


@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pg5PageRoutingModule,
    ShareModule

    
  ],
  declarations: [Pg5Page]
})
export class Pg5PageModule {}
