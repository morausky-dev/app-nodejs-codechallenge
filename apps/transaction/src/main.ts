import { NestFactory } from '@nestjs/core';
import { AppModule } from './transaction/infraestructure/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { logLevel } from '@nestjs/microservices/external/kafka.interface';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'event_bus',
        brokers: ['localhost:9092'],
        logLevel: logLevel.DEBUG
      },
      consumer: {
        groupId: 'transaction-consumer'
      }
    }
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen();
}
bootstrap();
