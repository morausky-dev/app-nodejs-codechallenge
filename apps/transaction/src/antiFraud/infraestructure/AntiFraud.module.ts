import { Module } from '@nestjs/common';
import { AntiFraudService } from '../aplication/AntiFraud.service';
import { AntiFraudController } from './AntiFraud.controller';

@Module({
  controllers: [AntiFraudController],
  providers: [AntiFraudService],
})
export class AntiFraudModule {}
