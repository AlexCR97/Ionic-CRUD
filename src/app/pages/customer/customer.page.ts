import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() { }

  addCustomer() {
    console.log('add customer');

    this.router.navigateByUrl('/add-customer');
  }

}
