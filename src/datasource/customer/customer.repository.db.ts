import { Model } from "mongoose";
import CustomerEventRepository from "src/service/customer/customer.repository";
import { CustomerCreateEventModel } from "./customer.event.interface";
import { Inject, Injectable } from "@nestjs/common";
import { CustomerCreateEvent } from "src/domain/customer/customer.create.event";

@Injectable()
export default class CustomerRepositoryDb implements CustomerEventRepository {
  constructor(
    @Inject('CUSTOMER_EVENT_MODEL')
    private readonly customerEventModel: Model<CustomerCreateEventModel>
  ) {}

  async insert(event: CustomerCreateEvent): Promise<CustomerCreateEvent> {
    const eventModel = await this.customerEventModel.create(event)
    return eventModel
  }
}
