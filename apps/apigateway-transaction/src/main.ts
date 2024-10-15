import { NestFactory } from '@nestjs/core';
import { ApigatewayTransactionModule } from './infraestructure/apigateway-transaction.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ApigatewayTransactionModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
