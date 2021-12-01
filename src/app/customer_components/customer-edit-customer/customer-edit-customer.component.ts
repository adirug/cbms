import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/interfaces/Customer';

@Component({
  selector: 'app-customer-edit-customer',
  templateUrl: './customer-edit-customer.component.html',
  styleUrls: ['./customer-edit-customer.component.css']
})
export class CustomerEditCustomerComponent implements OnInit {

  customer: Customer;

  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) {
    this.customer = {}

  }

  editCustomerHandler(data: any) {
    this.customerService.editCustomer(22, data)
      .subscribe((data: any) => {
        console.log(data)
        this.router.navigate(['customer'])
      })
  }

  ngOnInit(): void {
    console.log("Inside ng init");

    this.customerService.getCustomerById(22)
      .subscribe((data: any) => {
        this.customer = data;
        console.log(this.customer)
      })
  }

}
