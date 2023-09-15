import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pg2Page } from './pg2.page';

const routes: Routes = [
  {
    path: '',
    component: Pg2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pg2PageRoutingModule {}
