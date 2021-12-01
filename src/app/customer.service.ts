import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url = "http://localhost:8111/api/v1/customer";

  constructor(private http: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application.json'
    })
  }

  "headers": [{"content-type": "application/json"}]

  //==CRUD SERVICE===============================================================================================

  getCustomerById(customerId: number): Observable<any> {
    console.log(customerId);
    console.log("Inside getCustomerDetails of CustomerService")
    return this.http.get(this.url + "/getCustomerDetails/" + customerId)
  }

  addPayee(customerId: number, payee: any) {
    console.log("inside add payee")
    console.log("id-" + customerId)
    console.log("name-" + payee.payeeName)

    return this.http.post(this.url + "/addPayee/" + customerId, payee, { responseType: 'text' })
  }

  editCustomer(customerId: number, customerData: any) {
    console.log("inside edit data")
    console.log("id-" + customerId)
    console.log("name-" + customerData.customerName)

    return this.http.put(this.url + "/editCustomer/" + customerId, customerData, { responseType: 'text' })
  }

  //==SEND TO PAYEE================================================================================================

  sendToPayee(customerId: number, payeeId: number, amount: number) {
    console.log("inside edit data")
    console.log("customerId -" + customerId)
    console.log("payeeId -" + payeeId)
    console.log("amount - " + amount)
    console.log(this.url + "/" + customerId + "/sendToPayee/" + payeeId, amount)

    return this.http.post(this.url + "/" + customerId + "/sendToPayee/" + payeeId, amount)
  }

}