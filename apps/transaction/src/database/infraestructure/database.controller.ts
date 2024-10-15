import { Controller } from '@nestjs/common';
import { DatabaseService } from '../aplication/database.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateTransactionRequestDto } from './dto/transactionRequest.dto';
import { UpdateTransactionStatusRequestDto } from './dto/updateTransactionStatusRequest.dto';

@Controller()
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @MessagePattern({ cmd: 'save_transaction' })
  saveTransaction(@Payload() payload: CreateTransactionRequestDto) {
    console.log('saveTransaction - event', payload);
    this.databaseService.saveTransaction(payload);
  }

  @MessagePattern({ cmd: 'get_transaction' })
  getTransaction(@Payload('transactionId') transactionId: string) {
    console.log('getTransaction - event', transactionId);
    this.databaseService.getTransaction(transactionId);
  }


  @MessagePattern({ cmd: 'update_transaction_status' })
  updateTransactionStatus(@Payload() payload: UpdateTransactionStatusRequestDto) {
    console.log('updateTransactionStatus - event', payload);
    const {status, transactionId} = payload
    this.databaseService.updateTransactionStatus(status, transactionId);
  }
}
