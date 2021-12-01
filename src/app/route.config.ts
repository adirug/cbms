import { Routes } from "@angular/router";
import { CustomerAddPayeeComponent } from "./customer_components/customer-add-payee/customer-add-payee.component";
import { CustomerEditCustomerComponent } from "./customer_components/customer-edit-customer/customer-edit-customer.component";
import { CustomerGetCustomerByIdComponent } from "./customer_components/customer-get-customer-by-id/customer-get-customer-by-id.component";
import { CustomerSendToPayeeComponent } from "./customer_components/customer-send-to-payee/customer-send-to-payee.component";
import { CustomerComponent } from "./customer_components/customer/customer.component";
import { EmployeeAddCustomerComponent } from "./employee_components/employee-add-customer/employee-add-customer.component";
import { EmployeeEditCustomerComponent } from "./employee_components/employee-edit-customer/employee-edit-customer.component";
import { EmployeeGetAllCustomersComponent } from "./employee_components/employee-get-all-customers/employee-get-all-customers.component";
import { EmployeeTransactionComponent } from "./employee_components/employee-transaction/employee-transaction.component";
import { EmployeeComponent } from "./employee_components/employee/employee.component";
import { LoginComponent } from "./login/login.component";


export const RouteArray: Routes = [

    {
        path: 'login',
        component: LoginComponent,
    },

    {
        path: 'customer',
        component: CustomerComponent,
    },

    {
        path: 'customerGetCustomerById',
        component: CustomerGetCustomerByIdComponent,
    },

    {
        path: 'customerEditCustomer',
        component: CustomerEditCustomerComponent,
    },

    {
        path: 'customerAddPayee',
        component: CustomerAddPayeeComponent,
    },

    {
        path: 'customerSendToPayee',
        component: CustomerSendToPayeeComponent,
    },

    {
        path: 'employee',
        component: EmployeeComponent,
    },

    {
        path: 'employeeGetAllCustomers',
        component: EmployeeGetAllCustomersComponent,
    },

    {
        path: 'employeeAddCustomer',
        component: EmployeeAddCustomerComponent,
    },

    {
        path: 'employeeEditCustomer',
        component: EmployeeEditCustomerComponent,
    },

    {
        path: 'employeeTransaction/:customerId',
        component: EmployeeTransactionComponent,
    },

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }

]