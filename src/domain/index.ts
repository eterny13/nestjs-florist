import { CustomerCreateCommand } from "./customer/customer.create.command";
import { CustomerCreateEvent } from "./customer/customer.create.event";
import { Customer } from "./customer/customer.model";

export const CustomerDomainLayer = [CustomerCreateCommand, CustomerCreateEvent, Customer]
