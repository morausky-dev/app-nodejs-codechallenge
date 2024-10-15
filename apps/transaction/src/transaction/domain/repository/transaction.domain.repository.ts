import { TransactionReponseDomain } from "../entity/TransactionReponseDomain";
import { TransactionRequestDomain } from "../entity/TransactionRequestDomain";

export interface TransactionRepositoryDomain {
    saveTransaction(transaction: TransactionRequestDomain): Promise<{transactionId: string}>;
    sendTransactionCreated(transactionId: string, value: number) : Promise<void>;
    getTransaction(transactionId: string) : Promise<TransactionReponseDomain>;
    approveTransaction(transactionId: string): Promise<boolean>;
    rejectTransaction(transactionId: string) : Promise<boolean>;
}