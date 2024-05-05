import { CustomerCreateHandler } from "./customer/customer.command.handler";
import { CustomerCreatedEventHandler } from "./customer/customer.event.handler";
import { CustomerService } from "./customer/customer.service";

export const CustomerServiceLayer = [CustomerCreateHandler, CustomerCreatedEventHandler, CustomerService]
