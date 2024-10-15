import { Injectable } from '@nestjs/common';
import { AntiFraudDomainService } from '../domain/AntiFraud.domain.service';

@Injectable()
export class AntiFraudService {

  constructor(private readonly antiFraudDomainService: AntiFraudDomainService) {}

  validateTransactionCreated(transactionId: string, value: number) {
    this.antiFraudDomainService.validateTransactionCreated(transactionId, value)
  }
}
