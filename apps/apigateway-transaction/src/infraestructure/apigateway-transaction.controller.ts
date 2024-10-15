import { Body, Controller, Get, Inject, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { TransactionService } from '../aplication/transaction.service';
import { TransactionReponseDomain } from '../domain/entity/TransactionReponseDomain';
import { CreateTransactionRequestDto } from './dto/CreateTransactionRequest.dto';

@Controller('transaction')
export class ApigatewayTransactionController {
  constructor(@Inject('TransactionService') private readonly transactionService: TransactionService) {}

  @Get('/:transactionId')
  async getTransaction(@Param('transactionId', ParseUUIDPipe) transactionId: string): Promise<TransactionReponseDomain> {
    return this.transactionService.getTransaction(transactionId);
  }

  @Post()
  async postTransaction(@Body() transaction: CreateTransactionRequestDto): Promise<{transactionId: string}> {
    return this.transactionService.postTransaction(transaction);
  }
}
