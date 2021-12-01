import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Customer } from 'src/app/interfaces/Customer';

@Component({
  selector: 'app-employee-get-all-customers',
  templateUrl: './employee-get-all-customers.component.html',
  styleUrls: ['./employee-get-all-customers.component.css']
})
export class EmployeeGetAllCustomersComponent implements OnInit {

  customers: Customer[];
  constructor(private employeeService: EmployeeService) {
    this.customers = []
  }

  getAllCustomersHandler() {
    this.employeeService.getAllCustomersService()
      .subscribe(data => {
        this.customers = data;
        console.log(this.customers);
      })
  }

  ngOnInit(): void {
    this.getAllCustomersHandler();
  }

}
