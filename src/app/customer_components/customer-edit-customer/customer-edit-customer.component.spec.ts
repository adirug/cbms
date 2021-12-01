import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEditCustomerComponent } from './customer-edit-customer.component';

describe('CustomerEditCustomerComponent', () => {
  let component: CustomerEditCustomerComponent;
  let fixture: ComponentFixture<CustomerEditCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerEditCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEditCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
