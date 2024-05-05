import * as mongoose from 'mongoose';

export const CustomerEventSchema = new mongoose.Schema({
  id: String,
  code: String,
  name: String,
  email: String
})
