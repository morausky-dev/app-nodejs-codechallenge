import { Controller } from '@nestjs/common';
import { TransactionService } from '../aplication/transaction.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateTransactionRequestDto } from './dto/CreateTransactionRequest.dto';

@Controller()
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) { }

  @MessagePattern({ cmd: 'store_transaction' })
  storeTransaction(@Payload() transaction: CreateTransactionRequestDto) {
    console.log('storeTransaction - event', transaction)
    return this.transactionService.storeTransaction(transaction)
  }

  @MessagePattern({ cmd: 'get_transaction' })
  getTransaction(@Payload('transactionId') transactionId: string) {
    console.log('getTransaction - event', transactionId)
    return this.transactionService.getTransaction(transactionId)
  }

  @MessagePattern({ cmd: 'approve_transaction' })
  approveTransaction(@Payload('transactionId') transactionId: string) {
    console.log('approveTransaction - event', transactionId)
    return this.transactionService.approveTransaction(transactionId)
  }

  @MessagePattern({ cmd: 'reject_transaction' })
  rejectTransaction(@Payload('transactionId') transactionId: string) {
    console.log('rejectTransaction - event', transactionId)
    return this.transactionService.rejectTransaction(transactionId)
  }
}
