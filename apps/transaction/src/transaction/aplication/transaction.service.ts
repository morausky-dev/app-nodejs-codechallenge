import { TransactionRequestDomain } from "../domain/entity/TransactionRequestDomain";
import { TransactionDomainService } from "../domain/transaction.domain.service";

export class TransactionService {

    public constructor(private readonly transactionDomainService: TransactionDomainService) {}
    
    async storeTransaction(transaction: TransactionRequestDomain) {
        return this.transactionDomainService.storeTransaction(transaction);
    }

    async getTransaction(transactionId: string) {
        return this.transactionDomainService.getTransaction(transactionId);
    }

    async approveTransaction(transactionId: string) {
        return this.transactionDomainService.approveTransaction(transactionId);
    }

    async rejectTransaction(transactionId: string) {
        return this.transactionDomainService.rejectTransaction(transactionId);
    }
}
