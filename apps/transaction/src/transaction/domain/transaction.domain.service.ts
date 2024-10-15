import { TransactionRequestDomain } from "./entity/TransactionRequestDomain";
import { TransactionRepositoryDomain } from "./repository/transaction.domain.repository";

export class TransactionDomainService {

    public constructor(private readonly transactionRepository: TransactionRepositoryDomain) {}
    
    async storeTransaction(transaction: TransactionRequestDomain): Promise<{ transactionId: string; }> {
        const transactioncreated = await  this.transactionRepository.saveTransaction(transaction);
        this.transactionRepository.sendTransactionCreated(transactionId);
        return transactioncreated;
    }

    async getTransaction(transactionId: string) {
        return this.transactionRepository.getTransaction(transactionId);
    }

    async approveTransaction(transactionId: string) {
        return this.transactionRepository.approveTransaction(transactionId);
    }

    async rejectTransaction(transactionId: string) {
        return this.transactionRepository.rejectTransaction(transactionId);
    }
}
