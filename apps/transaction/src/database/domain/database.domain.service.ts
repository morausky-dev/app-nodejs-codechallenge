import { StatusDomain } from './entities/StatusDomain';
import { TransactionRequestDomain } from './entities/TransactionRequestDomain';
import { TransactionRepositoryDomain } from './repository/transaction.repository';

export class DatabaseDomainService {

    public constructor(private readonly transactionRepository: TransactionRepositoryDomain) {}
    
    async getTransaction(transactionId: string) {
        return this.transactionRepository.getTransaction(transactionId);
    }

    async saveTransaction(transaction: TransactionRequestDomain) {
        return this.transactionRepository.saveTransaction(transaction);
    }

    async updateTransactionStatus(status: StatusDomain, transactionId: string) {
        return this.transactionRepository.updateTransactionState(status, transactionId)
    }
}
