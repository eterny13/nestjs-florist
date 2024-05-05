import { Body, Controller, Post } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { CustomerCreateCommand } from "src/domain/customer/customer.create.command";

@Controller('customers')
export class CustomerController {
  constructor(
    private readonly commandBus: CommandBus,
  ) {}

  @Post()
  async create(@Body() request: CustomerCreateCommand) {
    const command = new CustomerCreateCommand(request.code, request.name, request.email)
    return this.commandBus.execute(command)
  }
}
