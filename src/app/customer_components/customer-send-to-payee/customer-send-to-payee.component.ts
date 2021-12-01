import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-customer-send-to-payee',
  templateUrl: './customer-send-to-payee.component.html',
  styleUrls: ['./customer-send-to-payee.component.css']
})
export class CustomerSendToPayeeComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  sendToPayeeHandler(payeeData: any) {
    this.customerService.sendToPayee(payeeData.customerId, payeeData.payeeId, payeeData.amount)
    .subscribe()
  }

}