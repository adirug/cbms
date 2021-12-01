import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { Payee } from 'src/app/interfaces/Payee';


@Component({
  selector: 'app-customer-add-payee',
  templateUrl: './customer-add-payee.component.html',
  styleUrls: ['./customer-add-payee.component.css']
})
export class CustomerAddPayeeComponent implements OnInit {

  payee: Payee;
  payees: Payee[];

  constructor(private customerService: CustomerService, private router: Router) {
    this.payee = {
      "payeeAccountNumber": 0,
      "payeeId": 0,
      "payeeName": ""
    },
      this.payees = []
  }

  addPayeeHandler(payeeData: any) {

    this.payee.payeeAccountNumber = payeeData.accountNumber;
    this.payee.payeeName = payeeData.name;

    this.payees.push(this.payee);

    this.customerService.addPayee(22, this.payees)
      .subscribe((data: any) => {
        console.log(data)
        this.router.navigate(['customer'])
      })
  }



  ngOnInit(): void {
  }

}
