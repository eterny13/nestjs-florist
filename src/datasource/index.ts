import { customersProviders } from "./customer/customer.providers";
import CustomerRepositoryDb from "./customer/customer.repository.db";

export const CustomerDataSourceLayer = [CustomerRepositoryDb, ...customersProviders]
