import { Account } from "./Account";
import { Payee } from "./Payee";
import { Transaction } from "./Transaction";

export interface Customer {
    customerId?: number;
    customerName?: string;
    customerEmail?: string;
    customerAddress?: string;
    customerPhone?: number;
    customerUserName?: string;
    customerPassword?: string;
    payees?: Payee[];
    transactions?: Transaction[];
    account?: Account;
}