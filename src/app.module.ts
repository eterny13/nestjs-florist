import { Module } from '@nestjs/common';
import { CustomerModule } from './customers.module';

@Module({
  imports: [
    CustomerModule
  ],
})
export class AppModule {}
