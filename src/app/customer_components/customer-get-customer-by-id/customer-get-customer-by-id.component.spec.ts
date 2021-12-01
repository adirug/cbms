import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGetCustomerByIdComponent } from './customer-get-customer-by-id.component';

describe('CustomerGetCustomerByIdComponent', () => {
  let component: CustomerGetCustomerByIdComponent;
  let fixture: ComponentFixture<CustomerGetCustomerByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerGetCustomerByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerGetCustomerByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
