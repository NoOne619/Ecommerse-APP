import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pg4Page } from './pg4.page';

const routes: Routes = [
  {
    path: '',
    component: Pg4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pg4PageRoutingModule {}
