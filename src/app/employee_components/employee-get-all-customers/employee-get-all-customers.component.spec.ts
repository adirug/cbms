import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeGetAllCustomersComponent } from './employee-get-all-customers.component';

describe('EmployeeGetAllCustomersComponent', () => {
  let component: EmployeeGetAllCustomersComponent;
  let fixture: ComponentFixture<EmployeeGetAllCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeGetAllCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeGetAllCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
