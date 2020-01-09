import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowCustomerPageRoutingModule } from './show-customer-routing.module';

import { ShowCustomerPage } from './show-customer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowCustomerPageRoutingModule
  ],
  declarations: [ShowCustomerPage]
})
export class ShowCustomerPageModule {}
