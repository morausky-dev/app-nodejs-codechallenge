import { Module } from '@nestjs/common';
import { DatabaseService } from '../aplication/database.service';
import { DatabaseController } from './database.controller';
import { TransactionRepository } from './repository/transaction.repository';
import { PrismaService } from './prisma/prisma.service';
import { DatabaseDomainService } from '../domain/database.domain.service';

@Module({
  controllers: [DatabaseController],
  providers: [
    PrismaService,
    {
      provide: 'TransactionRepository',
      useClass: TransactionRepository
    },
    {
      provide: 'DatabaseDomainService',
      useFactory: (repository: TransactionRepository) => new DatabaseDomainService(repository),
      inject: ['TransactionRepository']
    },
    {
      provide: 'DatabaseService',
      useFactory: (databaseDomainService: DatabaseDomainService) => new DatabaseService(databaseDomainService),
      inject: ['DatabaseDomainService']
    },
  ],
})
export class DatabaseModule { }
