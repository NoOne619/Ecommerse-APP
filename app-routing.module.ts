import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'pg5',
    pathMatch: 'full'
  },
  {
    path: 'pg1',
    loadChildren: () => import('./pg1/pg1.module').then( m => m.Pg1PageModule)
  },
  {
    path: 'pg2',
    loadChildren: () => import('./pg2/pg2.module').then( m => m.Pg2PageModule)
  },
  {
    path: 'pg3',
    loadChildren: () => import('./pg3/pg3.module').then( m => m.Pg3PageModule)
  },
  {
    path: 'pg4',
    loadChildren: () => import('./pg4/pg4.module').then( m => m.Pg4PageModule)
  },
  {
    path: 'pg5',
    loadChildren: () => import('./pg5/pg5.module').then( m => m.Pg5PageModule)
  },
  {
    path: 'pg6',
    loadChildren: () => import('./pg6/pg6.module').then( m => m.Pg6PageModule)
  },
 
  
   
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
