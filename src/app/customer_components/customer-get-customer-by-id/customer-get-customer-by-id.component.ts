import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { Customer } from 'src/app/interfaces/Customer';

@Component({
  selector: 'app-customer-get-customer-by-id',
  templateUrl: './customer-get-customer-by-id.component.html',
  styleUrls: ['./customer-get-customer-by-id.component.css']
})
export class CustomerGetCustomerByIdComponent implements OnInit {

  customer: Customer;

  constructor(private customerService: CustomerService) {
    this.customer = {}
  }

  getCustomerByIdHandler(id: any) {
    this.customerService.getCustomerById(id.id)
      .subscribe(data => {
        this.customer = data;
        console.log(this.customer);
      })
  }

  getCustomerByIdNumberHandler(id: number) {
    this.customerService.getCustomerById(id)
      .subscribe(data => {
        this.customer = data;
        console.log(data);
      })
  }

  ngOnInit(): void {
  }

}
