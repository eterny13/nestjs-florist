import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { CustomerControllerLayer } from './api';
import { CustomerDomainLayer } from "./domain";
import { CustomerDataSourceLayer } from "./datasource";
import { CustomerServiceLayer } from "./service";
import { DatabaseModule } from "./infra/database/database.module";
import CustomerRepositoryDb from "./datasource/customer/customer.repository.db";

@Module({
  imports: [CqrsModule, DatabaseModule],
  controllers: [...CustomerControllerLayer],
  providers: [
    ...CustomerDataSourceLayer,
    ...CustomerServiceLayer,
    ...CustomerDomainLayer,
    {
      provide: 'CUSTOMER_REPOSITORY_DB',
      useClass: CustomerRepositoryDb
    }
  ]
})
export class CustomerModule {} 
