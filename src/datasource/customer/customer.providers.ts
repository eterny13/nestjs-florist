import { Connection } from 'mongoose';
import { CustomerEventSchema } from './customer.event.schema';

export const customersProviders = [
  {
    provide: 'CUSTOMER_EVENT_MODEL',
    useFactory: (connection: Connection) => connection.model('Customer', CustomerEventSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
