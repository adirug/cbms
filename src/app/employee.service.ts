import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './interfaces/Customer';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = "http://localhost:8111/api/v1/employee";

  constructor(private http: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application.json'
    })
  }


  //==CRUD SERVICE===============================================================================================

  getAllCustomersService(): Observable<any> {
    return this.http.get(this.url + "/getAllCustomerDetails");
  }

  addCustomerService(customer: Customer): Observable<any> {
    console.log("addCustomerService - " + customer);
    return this.http.post(this.url + "/addCustomer", customer)

  }

  editCustomerService() {

  }

  deleteCustomerService() {

  }

  //==DEPOSIT & WITHDRAW==========================================================================================

  withdrawAmountService(param: any, amount: number): Observable<any> {
    return this.http.post(this.url + "/deposit/" + param, amount);
  }

  depositAmountService(param: any, amount: any): Observable<any> {
    return this.http.post(this.url + "/withdraw/" + param, amount);
  }

  // depositService(param: any, amount: number): Observable<any> {
  //   console.log('service ---id ='+param)
  //   console.log('amount='+amount)
  //   console.log(typeof(amount.valueOf()))
  //   return this.http.post(this.url + "/deposit/" + param, amount.valueOf())
  // }
  // withdrawService(param: any, amount: any): Observable<any> {
  //   return this.http.post(this.url + "/withdraw/" + param, amount.valueOf())
  // }

  //==CUSTOMER STATUS=============================================================================================

  changeCustomerAccountStatusActiveService() {

  }

  changeCustomerAccountStatusInactiveService() {

  }

  changeCustomerAccountStatusLockedService() {

  }
}
