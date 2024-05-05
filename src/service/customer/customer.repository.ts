import { CustomerCreateEvent } from "src/domain/customer/customer.create.event";

export default interface CustomerEventRepository {
  insert(event: CustomerCreateEvent): Promise<CustomerCreateEvent>
}
