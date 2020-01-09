import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowCustomerPage } from './show-customer.page';

describe('ShowCustomerPage', () => {
  let component: ShowCustomerPage;
  let fixture: ComponentFixture<ShowCustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCustomerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowCustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
