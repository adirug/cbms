// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


// ==================================================================================================
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { EmployeeService } from '../employee.service';
import { Customer } from '../interfaces/Customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customers: Customer[]

  constructor(private employeeService: EmployeeService, private customerService: CustomerService) {
    this.customers = [];
  }

  loginHandler() {
    
  }

  ngOnInit(): void {
    this.employeeService.getAllCustomersService()
    .subscribe(data=>{
      this.customers=data;
    })
  }

}
