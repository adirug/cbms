import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomerAddPayeeComponent } from './customer_components/customer-add-payee/customer-add-payee.component';
import { CustomerEditCustomerComponent } from './customer_components/customer-edit-customer/customer-edit-customer.component';
import { CustomerGetCustomerByIdComponent } from './customer_components/customer-get-customer-by-id/customer-get-customer-by-id.component';
import { CustomerSendToPayeeComponent } from './customer_components/customer-send-to-payee/customer-send-to-payee.component';
import { CustomerComponent } from './customer_components/customer/customer.component';
import { EmployeeAddCustomerComponent } from './employee_components/employee-add-customer/employee-add-customer.component';
import { EmployeeEditCustomerComponent } from './employee_components/employee-edit-customer/employee-edit-customer.component';
import { EmployeeGetAllCustomersComponent } from './employee_components/employee-get-all-customers/employee-get-all-customers.component';
import { EmployeeTransactionComponent } from './employee_components/employee-transaction/employee-transaction.component';
import { EmployeeComponent } from './employee_components/employee/employee.component';
import { LoginComponent } from './login/login.component';
import { RouteArray } from './route.config';



@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    EmployeeComponent,
    LoginComponent,
    CustomerEditCustomerComponent,
    CustomerAddPayeeComponent,
    CustomerGetCustomerByIdComponent,
    EmployeeGetAllCustomersComponent,
    EmployeeAddCustomerComponent,
    EmployeeEditCustomerComponent,
    EmployeeTransactionComponent,
    CustomerSendToPayeeComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule.forRoot(RouteArray),ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
