import { DatabaseDomainService } from '../domain/database.domain.service';
import { StatusDomain } from '../domain/entities/StatusDomain';
import { TransactionRequestDomain } from '../domain/entities/TransactionRequestDomain';

export class DatabaseService {

    public constructor(private readonly databaseDomainService: DatabaseDomainService) {}
    
    async saveTransaction(payload: TransactionRequestDomain) {
        return this.databaseDomainService.saveTransaction(payload);
    }

    async getTransaction(transactionId: string) {
        return this.databaseDomainService.getTransaction(transactionId);
    }

    async updateTransactionStatus(status: StatusDomain, transactionId: string) {
        return this.databaseDomainService.updateTransactionStatus(status, transactionId)
    }
}
