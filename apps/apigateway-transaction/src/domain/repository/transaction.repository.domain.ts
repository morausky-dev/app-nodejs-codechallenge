import { TransactionReponseDomain } from "../entity/TransactionReponseDomain"
import { TransactionRequestDomain } from "../entity/TransactionRequestDomain"

export interface TransactionRepositoryDomain {
    getTransaction(transactionId: string): Promise<TransactionReponseDomain>
    postTransaction(transaction: TransactionRequestDomain): Promise<{ transactionId: string }>
}