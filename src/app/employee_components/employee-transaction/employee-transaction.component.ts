import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-transaction',
  templateUrl: './employee-transaction.component.html',
  styleUrls: ['./employee-transaction.component.css']
})
export class EmployeeTransactionComponent implements OnInit {
  parameter: any;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { }

  transactionHandler(transaction: any) {

    console.log(transaction.transactionType)
    console.log(transaction.amount)
    if (transaction.transactionType == "deposit") {
      this.employeeService.depositAmountService(this.parameter, transaction.amount)
        .subscribe()
    }
    else {
      this.employeeService.withdrawAmountService(this.parameter, transaction.amount)
        .subscribe()
    }

  }

  ngOnInit(): void {
    this.parameter = this.route.snapshot.paramMap.get("customerId");
  }

}


