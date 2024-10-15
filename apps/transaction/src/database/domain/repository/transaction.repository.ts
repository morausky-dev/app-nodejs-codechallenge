import { StatusDomain } from "../entities/StatusDomain";
import { TransactionReponseDomain } from "../entities/TransactionReponseDomain";
import { TransactionRequestDomain } from "../entities/TransactionRequestDomain";

export interface TransactionRepositoryDomain {
    getTransaction(transactionId: string): Promise<TransactionReponseDomain>;
    saveTransaction(transaction: TransactionRequestDomain): Promise<{transactionId: string}>;
    updateTransactionState(status: StatusDomain, transactionId: string) : Promise<boolean>;
}