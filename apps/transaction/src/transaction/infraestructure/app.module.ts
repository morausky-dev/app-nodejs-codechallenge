import { Module } from '@nestjs/common';
import { TransactionModule } from './transaction.module';
import { AntiFraudModule } from '../../antiFraud/infraestructure/AntiFraud.module';
import { DatabaseModule } from '../../database/infraestructure/database.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    TransactionModule,
    AntiFraudModule,
    DatabaseModule,
    ClientsModule.register([
      {
        name: 'TRANSACTION_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'event_bus',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'transaction-consumer'
          }
        }
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
