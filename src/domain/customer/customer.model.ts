import { AggregateRoot } from "@nestjs/cqrs";
import { CustomerCreateEvent } from "./customer.create.event";

export class Customer extends AggregateRoot {
  constructor(private id: string) {
    super();
  }

  create(code: string, name: string, email: string) {
    this.apply(new CustomerCreateEvent(this.id, code, name, email))
  }
}
