import { Injectable } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { CustomerCreateCommand } from "src/domain/customer/customer.create.command";

@Injectable()
export class CustomerService {
  constructor(private commandBus: CommandBus) {}

  async createCustomer(code: string, name: string, email: string) {
    return this.commandBus.execute(
      new CustomerCreateCommand(code, name, email) 
    )
  }
}
