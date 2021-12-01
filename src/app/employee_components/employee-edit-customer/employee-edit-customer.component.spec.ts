import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEditCustomerComponent } from './employee-edit-customer.component';

describe('EmployeeEditCustomerComponent', () => {
  let component: EmployeeEditCustomerComponent;
  let fixture: ComponentFixture<EmployeeEditCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeEditCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEditCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
