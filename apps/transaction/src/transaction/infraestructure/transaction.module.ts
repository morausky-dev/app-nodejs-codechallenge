import { Module } from '@nestjs/common';
import { TransactionService } from '../aplication/transaction.service';
import { TransactionController } from './transaction.controller';
import { TransactionRepository } from './repository/transaction.repository';
import { TransactionDomainService } from '../domain/transaction.domain.service';

@Module({
  controllers: [TransactionController],
  providers: [
    {
      provide: 'TransactionRepository',
      useClass: TransactionRepository
    },
    {
      provide: 'TransactionDomainService',
      useFactory: (repository: TransactionRepository) => new TransactionDomainService(repository),
      inject: ['TransactionRepository']
    },
    {
      provide: 'TransactionService',
      useFactory: (transactionDomainService: TransactionDomainService) => new TransactionService(transactionDomainService),
      inject: ['TransactionDomainService']
    },
  ],
})
export class TransactionModule {}
