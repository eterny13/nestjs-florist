import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { CustomerCreateCommand } from "src/domain/customer/customer.create.command";
import { Customer } from "src/domain/customer/customer.model";
import { v4 as uuidv4 } from 'uuid'

@CommandHandler(CustomerCreateCommand)
export class CustomerCreateHandler implements ICommandHandler<CustomerCreateCommand> {
  constructor(
    private publisher: EventPublisher
  ) {}

  async execute(command: CustomerCreateCommand) {
    const { code, name, email } = command
    const customerModel = this.publisher.mergeClassContext(Customer)

    const customerEventId = uuidv4()
    const customer = new customerModel(customerEventId.toString())
    customer.create(code, name, email)
    customer.commit()
  }
}

