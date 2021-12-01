import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Customer } from 'src/app/interfaces/Customer';

@Component({
  selector: 'app-employee-add-customer',
  templateUrl: './employee-add-customer.component.html',
  styleUrls: ['./employee-add-customer.component.css']
})
export class EmployeeAddCustomerComponent implements OnInit {

  customer: Customer;

  constructor(private employeeService: EmployeeService) {
    this.customer = {
      customerId: 0,
      customerName: "",
      customerEmail: "",
      customerAddress: "",
      customerPhone: 0,
      customerUserName: "",
      customerPassword: "",
      payees: [{
        payeeId: 0,
        payeeName: "",
        payeeAccountNumber: 0
      }
      ],
      account: {
        accountId: 0,
        accountNumber: 0,
        accountBalance: 0,
        accountStatus: "ACTIVE",
      },
      transactions: [{
        txnId: 0,
        txnDate: 0,
        txnType: "DEPOSIT"
      }]
    }
  }

  addCustomerHandler(inputCustomer: any) {
    this.customer.customerName = inputCustomer.name
    this.customer.customerEmail = inputCustomer.email
    this.customer.customerPhone = inputCustomer.phone
    this.customer.customerUserName = inputCustomer.username
    this.customer.customerPassword = inputCustomer.password
    this.customer.customerAddress = inputCustomer.address
    // this.customer.account.accountBalance = inputCustomer.balance

    console.log("compo" + this.customer.customerName)

    this.employeeService.addCustomerService(this.customer)
      .subscribe(data => {
        console.log("Data is - " + data);
      })
  }

  ngOnInit(): void {

  }

}
