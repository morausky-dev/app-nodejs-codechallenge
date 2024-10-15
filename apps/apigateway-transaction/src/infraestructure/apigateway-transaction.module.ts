import { Module } from '@nestjs/common';
import { ApigatewayTransactionController } from '../infraestructure/apigateway-transaction.controller';
import { TransactionService } from '../aplication/transaction.service';
import { TransactionDomainService } from '../domain/transaction.domain.service';
import { TransactionRepository } from './repository/TransactionRepository';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'hero',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'hero-consumer'
          }
        }
      },
    ]),
  ],
  controllers: [ApigatewayTransactionController],
  providers: [
    {
      provide: 'TransactionService',
      useClass: TransactionService
    },
    {
      provide: 'TransactionRepository',
      useClass: TransactionRepository
    },
    {
      provide: 'TransactionDomainService',
      useFactory: (repository: TransactionRepository) => new TransactionDomainService(repository),
      inject: ['TransactionRepository']
    },
  ],
})
export class ApigatewayTransactionModule {}
