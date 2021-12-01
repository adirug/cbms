import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddPayeeComponent } from './customer-add-payee.component';

describe('CustomerAddPayeeComponent', () => {
  let component: CustomerAddPayeeComponent;
  let fixture: ComponentFixture<CustomerAddPayeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAddPayeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAddPayeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
