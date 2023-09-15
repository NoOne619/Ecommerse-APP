import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pg6Page } from './pg6.page';

const routes: Routes = [
  {
    path: '',
    component: Pg6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pg6PageRoutingModule {}
