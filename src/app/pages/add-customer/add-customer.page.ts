import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.page.html',
  styleUrls: ['./add-customer.page.scss'],
})
export class AddCustomerPage implements OnInit {

  private name: string;
  private desc: string;

  private results: Observable<any>;
  private searchTerm: string;

  constructor(
    private testService: TestService,
  ) { }

  ngOnInit() { }

  addCustomer() {
    console.log('add customer');
    console.log('name: ' + this.name);
    console.log('desc: ' + this.desc);
  }

}
