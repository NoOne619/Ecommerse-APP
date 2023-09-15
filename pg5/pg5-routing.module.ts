import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pg5Page } from './pg5.page';
import { ShareModule } from '../Share/share/share.module';

const routes: Routes = [
  {
    path: '',
    component: Pg5Page
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pg5PageRoutingModule {}
