import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'test',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'customer',
    loadChildren: () => import('./pages/customer/customer.module').then( m => m.CustomerPageModule)
  },
  {
    path: 'add-customer',
    loadChildren: () => import('./pages/add-customer/add-customer.module').then( m => m.AddCustomerPageModule)
  },
  {
    path: 'show-customer',
    loadChildren: () => import('./pages/show-customer/show-customer.module').then( m => m.ShowCustomerPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./pages/test/test.module').then( m => m.TestPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
