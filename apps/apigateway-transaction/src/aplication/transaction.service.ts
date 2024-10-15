import { TransactionRequestDomain } from '../domain/entity/TransactionRequestDomain';
import { TransactionDomainService } from '../domain/transaction.domain.service';

export class TransactionService {

  constructor(private readonly transactionDomainService: TransactionDomainService) {}

  getTransaction(transactionId: string) {
    return this.transactionDomainService.getTransaction(transactionId);
  }
  postTransaction(transaction: TransactionRequestDomain) {
    return this.transactionDomainService.postTransaction(transaction);
  }
}
