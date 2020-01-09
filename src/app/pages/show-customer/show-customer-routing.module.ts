import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowCustomerPage } from './show-customer.page';

const routes: Routes = [
  {
    path: '',
    component: ShowCustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowCustomerPageRoutingModule {}
