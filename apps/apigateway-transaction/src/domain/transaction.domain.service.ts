import { TransactionRequestDomain } from "./entity/TransactionRequestDomain";
import { TransactionRepositoryDomain } from "./repository/transaction.repository.domain";

export class TransactionDomainService {

  constructor(private readonly repository: TransactionRepositoryDomain) {}

  async getTransaction(transactionId: string) {
    return this.repository.getTransaction(transactionId);
  }
  
  async postTransaction(transaction: TransactionRequestDomain): Promise<{transactionId: string}> {
    return this.repository.postTransaction(transaction);
  }
}
