import { Document } from 'mongoose';

export interface CustomerCreateEventModel extends Document {
  readonly id: string 
  readonly code: string 
  readonly name: string 
  readonly email: string 
}
