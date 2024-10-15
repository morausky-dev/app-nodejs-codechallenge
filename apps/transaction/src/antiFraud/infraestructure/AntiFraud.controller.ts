import { Controller } from '@nestjs/common';
import { AntiFraudService } from '../aplication/AntiFraud.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TransactionRequestDto } from './dto/TransactionRequest.dto';

@Controller()
export class AntiFraudController {
  constructor(private readonly antiFraudService: AntiFraudService) {}

  @MessagePattern({ cmd: 'transaction_created' })
  validateTransactionCreated(@Payload() payload: TransactionRequestDto) {
    console.log('validateTransactionCreated - event', payload);
    const {transactionId, value} = payload;
    return this.antiFraudService.validateTransactionCreated(transactionId, value);
  }
}
