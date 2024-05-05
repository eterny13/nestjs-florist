import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { CustomerCreateEvent } from "../../domain/customer/customer.create.event";
import { Inject, Injectable } from "@nestjs/common";
import CustomerEventRepository from "./customer.repository";

@EventsHandler(CustomerCreateEvent)
export class CustomerCreatedEventHandler implements IEventHandler<CustomerCreateEvent> {
  constructor(
    @Inject('CUSTOMER_REPOSITORY_DB')
    private readonly repository: CustomerEventRepository
  ) {}

  handle(event: CustomerCreateEvent) {
    console.log('Async Create Customer Event...');
    return this.repository.insert(event).then((value) => {
      console.log(value)
    })
  }
}
