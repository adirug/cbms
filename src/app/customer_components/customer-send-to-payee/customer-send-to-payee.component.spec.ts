import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSendToPayeeComponent } from './customer-send-to-payee.component';

describe('CustomerSendToPayeeComponent', () => {
  let component: CustomerSendToPayeeComponent;
  let fixture: ComponentFixture<CustomerSendToPayeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSendToPayeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSendToPayeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
